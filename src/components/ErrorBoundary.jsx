import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <div className="chapter-recovery"><div><p className="archive-label text-forge-magma">// ARCHIVE SYSTEM FAILURE</p><h1>RECOVERY MODE</h1><p>THIS RECORD COULD NOT BE RENDERED.</p><a href="/">← RETURN TO PORTAL</a></div></div>
    }
    return this.props.children
  }
}