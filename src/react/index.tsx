import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Electron  from 'electron'
import '../assets/scss/main.scss'

/** Loading App */

ReactDOM.render(
  <div className="message">
    <p>
      Electron &mdash; React &mdash; Redux &mdash; Typescript
    </p>
  </div>,
  document.querySelector('[data-app-stage]')
)

// Receive a message from the backend
Electron.ipcRenderer.on('loaded', (event: Electron.Event, data: any) => {
  console.log(data)
})
