import { app, BrowserWindow } from 'electron'
import { enableReactDevTool } from './debug'
import * as isDev from 'electron-is-dev'

console.log('Initializing...')

let window: Electron.BrowserWindow

const createWindow = () => {
  // Create the browser window.
  window = new BrowserWindow({width: 800, height: 420})

  // and load the index.html of the app.
  window.loadFile(`${__dirname}/index.html`)

  // Send a message to renderer process
  // This is here merely for example purposes
  setTimeout(() => {
    window.webContents.send('loaded', 'This is just a message.')
  }, 1000)

  // Emitted when the window is closed.
  window.on('closed', () => {
    window = null
  })
}

app.on('ready', () => {
  // If is dev, enable react dev tools
  if (isDev) {
    console.warn('Loading in Developer mode')
    enableReactDevTool()
  }

  createWindow()
})

app.on('window-all-closed', () => {
  console.info('Window was closed')
  
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (window === null) {
    createWindow()
  }
})
