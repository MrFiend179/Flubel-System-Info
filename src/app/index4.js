const { ipcRenderer } = require("electron");
const ipc = ipcRenderer
const si = require('systeminformation');
closeBtn.addEventListener('click', ()=>{
    ipc.send('closeApp')
})
minimizeApp.addEventListener('click', ()=>{
    ipc.send('minimizeApp')
})


si.osInfo(function(data){
    document.getElementById("osn-info").innerText = data.distro
    document.getElementById("pcn-info").innerText = data.hostname
    document.getElementById("v-info").innerText = data.release
    document.getElementById("b-info").innerText = data.build
    document.getElementById("arch-info").innerText = data.arch
    document.getElementById("uefi-info").innerText = data.uefi
    document.getElementById("snum-info").innerText = data.serial
    const datsp = data.platform
    document.getElementById("plat-info").innerText = datsp
});