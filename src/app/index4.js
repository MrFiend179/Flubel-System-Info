const { ipcRenderer } = require("electron");
const ipc = ipcRenderer
const si = require('systeminformation');
const os1 = require("os");
const os = require("os-utils")
const fs = require("fs")
const { cpuUsage } = require("process");
const { memLayout,fsSize,osInfo,currentLoad } = require('systeminformation');
const os2 = require("node-os-utils")
const ndi = require("node-disk-info")

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