const { app,BrowserWindow,ipcMain} = require('electron');
const os1 = require("os");
const os = require("os-utils")
const path = require("path"); 
require("electron-reload")(__dirname);
const { memLayout } = require("systeminformation");
const { currentLoad,osInfo } = require("systeminformation")
const ipc = ipcMain


const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
    height: 560,
    frame: false,
    icon: path.join(__dirname, "iiccoonn.png"),
    transparent: true,
    resizable: false,
    webPreferences: {
      
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(__dirname, 'preload.js'),
    }
    })
    window.loadFile('src/app/index.html')

  //  ipc.on('closeApp', ()=>{
  //window.close()
  //    })
    ipc.on('minimizeApp', ()=>{
    window.minimize()
    })
  ipc.on('closeApp', ()=>{
    window.close()
  })
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

ipcMain.handle("cpu/get", async (_,data) =>{

   const usage = await currentLoad();
   return usage;
})
