-- Shadows of Titan: user profiles table + Row Level Security
--
-- This migration creates a `profiles` table keyed 1:1 to `auth.users` and
-- locks it down with Row Level Security so that:
--   * anonymous (unauthenticated) clients cannot read or write any row
--   * authenticated users can only read and update their OWN row
--   * no client (authenticated or anonymous) can insert/delete profile rows
--     directly -- a profile row is created automatically via trigger when
--     a new auth user is created, and is removed automatically when the
--     backing auth user is deleted (ON DELETE CASCADE).
--
-- Apply with the Supabase CLI:
--   supabase db push
-- or paste into the SQL editor in the Supabase dashboard.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  callsign text,
  clearance_label text not null default 'CITIZEN',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is 'Public-facing profile data for an authenticated AAN account. One row per auth.users row.';

-- Keep updated_at current on every row update.
create or replace function public.handle_profiles_updated_at()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
  before update on public.profiles
  for each row
  execute function public.handle_profiles_updated_at();

-- Automatically create a profile row whenever a new auth user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, callsign)
  values (new.id, upper(split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

-- Row Level Security: deny everything by default, then allow narrow,
-- user-scoped access explicitly.
alter table public.profiles enable row level security;

drop policy if exists "Profiles are viewable by owner" on public.profiles;
create policy "Profiles are viewable by owner"
  on public.profiles
  for select
  to authenticated
  using (auth.uid() = id);

drop policy if exists "Profiles are updatable by owner" on public.profiles;
create policy "Profiles are updatable by owner"
  on public.profiles
  for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- No insert/delete policies are defined for `authenticated` or `anon`.
-- Combined with RLS being enabled, this means normal clients can never
-- create or delete profile rows directly -- only the trigger (which runs
-- with elevated privileges via `security definer`) can.
