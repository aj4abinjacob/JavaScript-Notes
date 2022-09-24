let text = document.getElementById("input");


document.getElementById("submit").addEventListener("click",async () => {
    const url = `http://api.qrserver.com/v1/create-qr-code/?data=${text.value}&size=100x100`;
    let response = await fetch(url)
    
    if (response.status === 200) {
        
        const imageBlob = await response.blob()
        const imageObjectURL = URL.createObjectURL(imageBlob);

        document.querySelector("#img").src = imageObjectURL;
        document.querySelector("#img").style.display = "block"

    }
    else {
        console.log("HTTP-Error: " + response.status)
    }
})
