const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer')

export const enableReactDevTool = () => {
  installExtension(REACT_DEVELOPER_TOOLS)
  .then((name) => {
    console.log(`Added Extension: ${name}`)
  })
  .catch((err) => {
    console.log('An error occurred: ', err)
  })
}

export const enableReduxDevTool = () => {
  installExtension(REDUX_DEVTOOLS)
  .then((name) => {
    console.log(`Added Extension: ${name}`)
  })
  .catch((err) => {
    console.log('An error occurred: ', err)
  })
}

export default () => {
  enableReactDevTool()
  enableReduxDevTool()
}
