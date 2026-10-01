export default function SceneBreak({ label = '✦ ✦ ✦' }) {
  return <div className="paper-scene-break" aria-label="scene break"><span /><b>{label}</b><span /></div>
}
