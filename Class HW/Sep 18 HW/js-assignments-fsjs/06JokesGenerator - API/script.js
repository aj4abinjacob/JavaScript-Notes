let url = "https://v2.jokeapi.dev/joke/Dark?type=twopart"
async function fetchJokes(){

    const joke = await (await fetch(url)).json();

    return joke;
}

document.getElementById("jokeBtn").addEventListener("click",(()=>{
    
})