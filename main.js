//copyright João Sousa 2021
//electron ===========================================================
const electron = require('electron')
// Module to control application life.
const app = electron.app
const dialogo = electron.dialog
const atalho = electron.globalShortcut
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const fs = require('fs')

const NativeImage = require('electron').nativeImage

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    transparent: false,
    frame: false,
    icon: NativeImage.createFromPath(__dirname + '/assets/tuxmind1.png'),
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true // fodas-se >:/ nova versão do electron precisa disto para usar o require no client
    },
    backgroundColor: '#34495e',
    show: false
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  mainWindow.once('ready-to-show', () => { 
    //setTimeout(function () {
      //mainWindow.show()
    //}, 7000)
    mainWindow.show()
    
  })
  
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  //atalhos teclado
  const ret = atalho.register('CommandOrControl+X', () => {
      console.log('CommandOrControl+X is pressed')
      mainWindow.close()
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

const {ipcMain} = require('electron')

const options = {
  type: 'question',
  buttons: ['Sim', 'Não'],
  defaultId: 2,
  title: 'Fechar Programa',
  message: 'Deseja mesmo fechar o programa?',
  detail: 'Certifique-se que fechou a última conta para não perder a lista de produtos',
};

ipcMain.on('fecharPrograma', () => {

  dialogo.showMessageBox(null, options, (response) => {
    if(response == 0){ //numero botao carregado
      mainWindow.close()
    }
  })
}) //fim