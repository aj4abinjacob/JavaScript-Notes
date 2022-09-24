let url = "https://v2.jokeapi.dev/joke/Dark?type=twopart"
async function fetchJokes(){

    const joke = await (await fetch(url)).json();
    
    return joke;

}

document.getElementById("jokeBtn").addEventListener("click",async ()=>{
 
    const joke = await fetchJokes();
    // document.querySelector("#joke").innerHTML = joke;
    document.querySelector("#joke").innerHTML = `${joke['setup']}<br/>${joke['delivery']}`;
})