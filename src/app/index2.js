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


si.fsSize().then(data => {
    const dats = data[0].use
    console.log(data)

    let progsv = 0;
    let progev = dats.toFixed(0);

    let prog = setInterval(()=> {
        progsv++;
        document.getElementById("progv").innerText = `${progsv}%`;
        document.getElementById("cicle").style.background = `conic-gradient(rgb(26, 67, 202) ${progsv * 3.6}deg,rgb(39, 39, 39) 0deg`
        
        if(progev >= 90){
            document.getElementById("cicle").style.background = `conic-gradient(rgb(224, 59, 59) ${progsv * 3.6}deg,rgb(39, 39, 39) 0deg`
        }
        if(progev >= 80 && progev < 90){
            document.getElementById("cicle").style.background = `conic-gradient(rgb(224, 106, 59) ${progsv * 3.6}deg,rgb(39, 39, 39) 0deg`
        }
        if(progsv == progev){
            clearInterval(prog)
        }
        if(progev <= 1){
            clearInterval(prog)
        }
    }, 1)

}).catch(err => console.log())
fsSize().then(data => {
    
    const used = data[0].used/1000000000;
    const used1 = used.toFixed(0);
    const used11 = used1*93;
    const used111 = used11/100;
    
    console.log(data)
    document.getElementById("fs-info").innerText = data[0].fs;
    document.getElementById("mount-info").innerText = data[0].mount;
    document.getElementById("type-info").innerText = data[0].type;
    const size1 = data[0].size/1000000000;
    const size11 = size1*93;
    const size111 = size11/100;
    document.getElementById("size-info").innerText = size111.toFixed(0)
    const daty = `${used111.toFixed(0)}/${size111.toFixed(0)}`
    document.getElementById("yui").innerText = daty

    const uio = data[0].available/1000000000;
    const uio1 = uio.toFixed(0)
    const availl = uio1*93;
    const availll = availl/100;
    console.log(availll)
    
    document.getElementById("available-info").innerText = availll.toFixed(1)
    

}).catch(err => console.log())
//partition-2
fsSize().then(data => {
    const dats = data[1].use

    let progsv = 0;
    let progev = dats.toFixed(0);

    let prog = setInterval(()=> {
        progsv++;
        document.getElementById("progvp2").innerText = `${progsv}%`;
        document.getElementById("ciclep2").style.background = `conic-gradient(rgb(26, 67, 202) ${progsv * 3.6}deg,rgb(39, 39, 39) 0deg`
        
        if(progev >= 90){
            document.getElementById("ciclep2").style.background = `conic-gradient(rgb(224, 59, 59) ${progsv * 3.6}deg,rgb(39, 39, 39) 0deg`
        }
        if(progev >= 80 && progev < 90){
            document.getElementById("ciclep2").style.background = `conic-gradient(rgb(224, 106, 59) ${progsv * 3.6}deg,rgb(39, 39, 39) 0deg`
        }
        if(progsv == progev){
            clearInterval(prog)
        }
        if(progev < 1){
            clearInterval(prog)
        }
    }, 1)
}).catch(err => console.log())
fsSize().then(data => {
    document.getElementById("type-info1").innerText = data[1].type;
    document.getElementById("mount-info1").innerText = data[1].mount;
    document.getElementById("fs-info1").innerText = data[1].fs;

    const used = data[1].used/1000000000;
    const total =data[1].size/1000000000;
    const used1 = used.toFixed(0);
    const total1 = total.toFixed(0);


    const size1 = data[1].size/1000000000;
    const size11 = size1*93;
    const size111 = size11/100;
    document.getElementById("size-info1").innerText = size111.toFixed(0)
    console.log(data[1].size)
    const daty = `${used1}/${size111.toFixed(0)}`

    document.getElementById("yui3").innerText = daty

    const uio = data[1].used/1000000000;
    const availl = size111-uio.toFixed(0)
    
    document.getElementById("available-info1").innerText = availl.toFixed(0)

})
fsSize().then(data => {
    const size1 = data[1].size/1000000000;
    const size11 = size1*93;
    const size111 = size11/100;
    document.getElementById("size-info1").innerText = size111.toFixed(0)


    const uio = data[1].used/1000000000;
    const uio1 = uio.toFixed(0)
    const availl = size111-uio1
    
    document.getElementById("available-info1").innerText = availl.toFixed(0)

})
//partition-3
fsSize().then(data => {
    const dats = data[2].use

    let progsv = 0;
    let progev = dats.toFixed(0);

    let prog = setInterval(()=> {
        progsv++;
        document.getElementById("progvp3").innerText = `${progsv}%`;
        document.getElementById("ciclep3").style.background = `conic-gradient(rgb(26, 67, 202) ${progsv * 3.6}deg,rgb(39, 39, 39) 0deg`
        
        if(progev >= 90){
            document.getElementById("ciclep3").style.background = `conic-gradient(rgb(224, 59, 59) ${progsv * 3.6}deg,rgb(39, 39, 39) 0deg`
        }
        if(progev >= 80 && progev < 90){
            document.getElementById("ciclep3").style.background = `conic-gradient(rgb(224, 106, 59) ${progsv * 3.6}deg,rgb(39, 39, 39) 0deg`
        }
        if(progsv == progev){
            clearInterval(prog)
        }
        if(progev == 0){
            clearInterval(prog)
        }
    }, 1)
    document.getElementById("type-info2").innerText = data[2].type;
    document.getElementById("mount-info2").innerText = data[2].mount;
    document.getElementById("fs-info2").innerText = data[2].fs;

    const used = data[2].used/1000000000;
    const total =data[2].size/1000000000;
    const used1 = used.toFixed(0);
    const total1 = total.toFixed(0);
    const size1 = data[2].size/1000000000;
    const size11 = size1*93;
    const size111 = size11/100;
    document.getElementById("size-info2").innerText = size111.toFixed(0)
    const daty = `${used1}/${size111.toFixed(0)}`

    document.getElementById("yui4").innerText = daty

    const uio = data[2].used/1000000000;
    const availl = size111-uio.toFixed(0)
    
    document.getElementById("available-info2").innerText = availl.toFixed(0)


}).catch(err => {})
//partition-4
fsSize().then(data => {
    const dats = data[3].use
    

    let progsv = 0;
    let progev = dats.toFixed(0);

    let prog = setInterval(()=> {
        progsv++;
        document.getElementById("progvp4").innerText = `${progsv}%`;
        document.getElementById("ciclep4").style.background = `conic-gradient(rgb(26, 67, 202) ${progsv * 3.6}deg,rgb(39, 39, 39) 0deg`
        
        if(progev >= 90){
            document.getElementById("ciclep4").style.background = `conic-gradient(rgb(224, 59, 59) ${progsv * 3.6}deg,rgb(39, 39, 39) 0deg`
        }
        if(progev >= 80 && progev < 90){
            document.getElementById("ciclep4").style.background = `conic-gradient(rgb(224, 106, 59) ${progsv * 3.6}deg,rgb(39, 39, 39) 0deg`
        }
        if(progsv == progev){
            clearInterval(prog)
        }
        if(progev == 0){
            clearInterval(prog)
        }
    }, 1)
    document.getElementById("type-info3").innerText = data[3].type;
    document.getElementById("mount-info3").innerText = data[3].mount;
    document.getElementById("fs-info3").innerText = data[3].fs;

    const used = data[3].used/1000000000;
    const total =data[3].size/1000000000;
    const used1 = used.toFixed(0);
    const total1 = total.toFixed(0);

    
    const size1 = data[3].size/1000000000;
    const size11 = size1*93;
    const size111 = size11/100;
    document.getElementById("size-info3").innerText = size111.toFixed(0)
    const daty = `${used1}/${size111.toFixed(0)}`

    document.getElementById("yui5").innerText = daty

    const uio = data[3].used/1000000000;
    const availl = size111-uio.toFixed(0)
    
    document.getElementById("available-info3").innerText = availl.toFixed(0)

}).catch(err => console.log())

