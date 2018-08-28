# Electron - React - Typescript - Webpack
> Boilerplate for Electron + React apps written in Typescript

## What is this boilerplate?
A simple and very lightweight sample app to build Electron desktop applications with ease. Use this simple template as a simple boilerplate for your new app.

### What does this template contains?
* **Electron** - Build cross platform desktop apps with web technologies using Electron 2
* **React** - A JavaScript library for building reactive user interfaces
* **Webpack** - Building and packaging source code for both main and renderer process done with Webpack 4

## Supported Platforms
This sample app was tested in **MacOS X** and **Linux** platforms and with **Node v10** . 

_NOTE: While not yet ready, a release with Windows support is planned for the upcoming future._

## Installation
 
```bash
npm install
```

## Development environment

First, make sure you have `node` and `npm` installed in your local system. Then use the following commands.

Build and watch for changes running:
```bash
npm run watch
```

Then start the Electron app using:
```bash
npm start
```

If you need to rebuild from scratch, cleaning up the build directory, run:
```bash
npm run clean
```

## Building and Packaging

This sample app ships with `electron-packager` as a dependency. You can use it to package the app for MacOS X, Linux and Windows environments.

### Prerequisistes

- The `config` object under `package.json` file holds information for packaging the app, mainly the icons location (currently under `src/assets/images/icons`).

### Releasing

First, run a build for production:
```bash
npm run build
```

Then, package for the desired platform:
```bash
npm run package:<platform>
```
Where `<platform>` can be `macos`, `linux` or `win32`.

Executables will be released under `release-builds` directory.

### Clean up old releases

Run the following command the remove old binaries:
```bash
npm run clean-release-builds
```

## TODO

- Release support for Windows
- Include Redux store for both main and renderer using IPC (http://jakeforaker.com/electron-react-redux-sending-events-via-rpc/)
