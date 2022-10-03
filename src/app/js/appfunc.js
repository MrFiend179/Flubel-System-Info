const { ipcRenderer } = require("electron")
const ipc = ipcRenderer



closeBtn.addEventListener('click', ()=>{
    ipc.send('closeApp')
})