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

si.memLayout(function(data){
    document.getElementById("manf1").innerText = data[0].manufacturer;
    const uiop = data[0].size/1000000000;
    document.getElementById("size1").innerText = `${uiop.toFixed(0)} GB`;
    document.getElementById("type1").innerText = data[0].type;
    document.getElementById("csp1").innerText = data[0].clockSpeed;
    document.getElementById("ff1").innerText = data[0].formFactor;
})
si.memLayout().then(data => {
    document.getElementById("manf2").innerText = data[1].manufacturer;
    const uiop = data[1].size/1000000000;
    document.getElementById("size2").innerText = `${uiop.toFixed(0)} GB`
    document.getElementById("type2").innerText = data[1].type;
    document.getElementById("csp2").innerText = data[1].clockSpeed;
    document.getElementById("ff2").innerText = data[1].formFactor;
})
si.memLayout().then(data => {
    document.getElementById("manf3").innerText = data[2].manufacturer;
    const uiop = data[2].size/1000000000;
    document.getElementById("size3").innerText = `${uiop.toFixed(0)} GB`
    document.getElementById("type3").innerText = data[2].type;
    document.getElementById("csp3").innerText = data[2].clockSpeed;
    document.getElementById("ff3").innerText = data[2].formFactor;
})
si.memLayout().then(data => {
    
    document.getElementById("manf4").innerText = data[3].manufacturer
    const uiop = data[3].size/1000000000;
    document.getElementById("size4").innerText = `${uiop.toFixed(0)} GB`
    document.getElementById("type4").innerText = data[3].type;
    document.getElementById("csp4").innerText = data[3].clockSpeed;
    document.getElementById("ff4").innerText = data[3].formFactor
})
var mem = os2.mem
setInterval(() => {
    mem.info().then(data => {
        document.getElementById("usedm-info").innerText = `${data.usedMemMb.toFixed(0)} MB`
        
      }).catch(err => (console.log()))
    },500)
setInterval(() =>{
    os.cpuUsage(function(v){
        document.getElementById("total-mem1").innerText = os.freemem().toFixed(0);
            
    })
    },500)

document.getElementById("total-mem").innerText = os.totalmem().toFixed(0);