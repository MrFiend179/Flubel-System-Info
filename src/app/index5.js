const { ipcRenderer } = require("electron");
const ipc = ipcRenderer
const si = require('systeminformation');

closeBtn.addEventListener('click', ()=>{
    ipc.send('closeApp')
})
minimizeApp.addEventListener('click', ()=>{
    ipc.send('minimizeApp')
})

si.graphics().then(data => {
    document.getElementById('veni1in').innerText = data.controllers[0].vendor
    document.getElementById('model1in').innerText = data.controllers[0].model
    document.getElementById('vram1in').innerText = data.controllers[0].vram
    document.getElementById("model1din").innerText = data.displays[0].model
    document.getElementById("main1din").innerText = data.displays[0].main
    document.getElementById("pxdepth1din").innerText = data.displays[0].pixelDepth

    const rfrrsh1 = data.displays[0].currentRefreshRate
    document.getElementById("rfrshrate1din").innerText = `${rfrrsh1} Hz`

    const posX = data.displays[0].resolutionX
    const posY = data.displays[0].resolutionY
    document.getElementById("res1din").innerText = `${posX} X ${posY}`
}).catch(err => console.log())

si.graphics().then(data => {
    document.getElementById('veni2in').innerText = data.controllers[1].vendor
    document.getElementById('model2in').innerText = data.controllers[1].model
    document.getElementById('vram2in').innerText = data.controllers[1].vram
    document.getElementById("model2din").innerText = data.displays[1].model
    document.getElementById("main2din").innerText = data.displays[1].main
    document.getElementById("pxdepth2din").innerText = data.displays[1].pixelDepth

    const rfrrsh1 = data.displays[1].currentRefreshRate
    document.getElementById("rfrshrate2din").innerText = `${rfrrsh1} Hz`

    const posX = data.displays[1].resolutionX
    const posY = data.displays[1].resolutionY
    document.getElementById("res2din").innerText = `${posX} X ${posY}`
}).catch(err => console.log())