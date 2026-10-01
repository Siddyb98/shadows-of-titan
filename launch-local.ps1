$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$url = 'http://127.0.0.1:5173/'

$server = Start-Process -FilePath 'npm.cmd' `
  -ArgumentList @('run', 'dev', '--', '--host', '127.0.0.1') `
  -WorkingDirectory $projectRoot `
  -PassThru

for ($attempt = 0; $attempt -lt 40; $attempt++) {
  try {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 1
    if ($response.StatusCode -eq 200) {
      Start-Process $url
      exit 0
    }
  } catch {
    Start-Sleep -Milliseconds 250
  }
}

if (-not $server.HasExited) {
  Stop-Process -Id $server.Id -Force
}

Write-Host 'The local server did not start. Confirm Node.js and npm are installed, then try again.'
Read-Host 'Press Enter to close'
exit 1
