let val = "0123456789ABCDEF";

document.querySelector("button").style.cursor = "pointer";

const getHex = () => {
    let hex_code = "#";
    for (let i = 0; i < 6; i++){
        hex_code += val[Math.floor(Math.random() * val.length)]
    }
    return hex_code;
}

document.querySelector("button").addEventListener("click",(event)=>{
    document.querySelector("#canvas").style.backgroundColor = getHex();
})