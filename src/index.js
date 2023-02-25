const { app,BrowserWindow,ipcMain,webContents} = require('electron');
const path = require("path"); 
require("electron-reload")(__dirname);
const {autoUpdater} = require('electron-updater')
const ipc = ipcMain
const logs = require('electron-log')

logs.transports.file.resolvePathFn = () => path.join('C:/Users/yibol/Desktop/btest3-c1.1/src', '/log/main.log')
/*
autoUpdater.setFeedURL({
  provider: 'github',
  owner: 'MrFiend179',
  repo: 'Flubel-System-Info',
  token: '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',
  releaseType: 'release'
})
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
autoUpdater.setFeedURL(
  provi
)
*/

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
    }
    })
    window.loadFile('./src/app/index.html')     
    logs.info(app.getVersion())
    autoUpdater.on('update-available',()=>{
      logs.info('update-available')
      window.webContents.send('sndewb')
    })
    autoUpdater.on('update-not-available',()=>{
      logs.info('update-not-available')
      window.webContents.send('sndewb1')
    })
    autoUpdater.on('checking-for-update',()=>{
      logs.info('checking-for-update')
      window.webContents.send('sndewb2')
    })
    autoUpdater.on('error',(error)=>{
      logs.info(`error: ${error}`)
    })
    autoUpdater.on('update-downloaded',()=>{
      logs.info('app updated')
    })
    autoUpdater.on('download-progress', (progressObj) => {
      const progressPercent = progressObj.percent.toFixed(2);
      logs.info(`Download progress: ${progressPercent}%`);
    });
    autoUpdater.requestHeaders = {'User-Agent': 'Flubel-System-Info'} 
  //  ipc.on('closeApp', ()=  >{
  //window.close()
  //    })
    ipc.on('minimizeApp', ()=>{
    window.minimize()
    })
  ipc.on('closeApp', ()=>{
    window.close()
  })
}

console.log(app.getAppPath())
app.whenReady().then(() => {
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })
/*
ipcMain.handle("cpu/get", async (_,data) =>{

   const usage = await currentLoad();
   return usage;
})
 
*/
