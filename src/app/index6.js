const { ipcRenderer } = require("electron");
const ipc = ipcRenderer
const si = require('systeminformation');

closeBtn.addEventListener('click', ()=>{
    ipc.send('closeApp')
})
minimizeApp.addEventListener('click', ()=>{
    ipc.send('minimizeApp')
})


si.wifiNetworks().then(data =>{
    console.log(data)
    document.getElementById("osn-info").innerText = data[0].ssid
    document.getElementById("b-info").innerText = `${data[0].frequency} Hz`
    document.getElementById("plat-info").innerText = data[0].security

})
setInterval(()=>{
si.wifiConnections().then(data =>{
    const data1 = data[0].signalLevel
    document.getElementById("v-info").innerText = data1
    if(data1 === '100%'){
        document.getElementById("v-info").style.color = '#3BE226'
    }
    if(data1 <= '99%' && data1 >= '50%'){
        document.getElementById("v-info").style.color = '#7FF170'
    }
    if(data1 <= '49%' && data1 >= '11%'){
        document.getElementById("v-info").style.color = '#F39C12'
    }
    if(data1 <= '10%'){
        document.getElementById("v-info").style.color = 'red'
    }
    document.getElementById("snum-info").innerText = `${data[0].txRate} Mbit/s`
})
},1000)

si.wifiInterfaces().then(data =>{
    console.log(data)
    document.getElementById("pcn-info").innerText = data[0].mac
    document.getElementById("uefi-info").innerText = data[0].model
})

si.wifiConnections().then(data =>{
    console.log(data)
    document.getElementById("arch-info").innerText = data[0].type
})