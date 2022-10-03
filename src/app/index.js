const os1 = require("os");
const si = require('systeminformation');
const {ipcRenderer} = require('electron')
const ipc = ipcRenderer

//minimizeApp.addEventListner('click', ()=>{
//    ipc.send('minimizeApp')
//})


setInterval(() => {
    si.currentLoad().then(data => {
        const INNER_BAR_CPU = document.getElementById("inner-bar");
        const perText= `${data.currentLoad.toFixed(2)}%`;
        document.getElementById("used-cpu").innerText = perText
        INNER_BAR_CPU.style.width = perText;
    })
    
    },500)
    
    
    const cpus = os1.cpus();
    console.log(cpus)
    const cpuda = cpus.length;
    const cpunm = cpus[0].model;
    const cpusp = cpus[0].speed;
    const tst = cpus[0].times;
    
    document.getElementById("cpu-ninfo").innerText = cpunm
    document.getElementById("cpu-cinfo").innerText = cpuda
    document.getElementById("cpu-sinfo").innerText = `${cpusp} Hz`
    
    
    
    si.cpuCurrentSpeed().then(data => {
        document.getElementById("cpu-mxinfo").innerText = data.max
        document.getElementById("cpu-mninfo").innerText = data.min
    })
    const MINUS = document.getElementById("minimizeApp");
    const CLOSE_APP = document.getElementById("close-app");
    setInterval(()=>{
    si.currentLoad().then(data=>{
        document.getElementById('avgl-info').innerText = `${data.currentLoad.toFixed(2)} %`
    })
    },1500)
    si.cpu().then(data=>{
        document.getElementById('pcore-info').innerText = data.physicalCores
    })
    

    closeBtn.addEventListener('click', ()=>{
        ipc.send('closeApp')
    })

    minimizeApp.addEventListener('click', ()=>{
        ipc.send('minimizeApp')
    })