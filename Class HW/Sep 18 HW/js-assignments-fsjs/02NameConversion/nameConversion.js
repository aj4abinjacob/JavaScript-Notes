
function camelCase(text){
    text = text.split(" ");
    result = ""
    text.forEach((element,index) => {
        if (index === 0) {
            result += element.toLowerCase();
        } else{
            result += element[0].toUpperCase() + element.slice(1);
        }
    });
    return result;
}

function pascalCase(text){
    text = text.split(" ");
    result = ""
    text.forEach((element,index) => {
            result += element[0].toUpperCase() + element.slice(1);
    });
    return result;
}

function snakeCase(text){
    return text.replace(/\s/g,"_");
}

function screamingSnakeCase(text){
    return text.toUpperCase().replace(/\s/g,"_");
}

function kebabCase(text){
    return text.replace(/\s/g,"-");
}

function screamingKebabCase(text){
    return text.toUpperCase().replace(/\s/g,"-");
}

document.querySelector("button").addEventListener("click",(event)=>{
    let text = document.querySelector("input").value;
    let final_obj = {"camel-case" : camelCase(text),
    "pascal-case" : pascalCase(text),
    "snake-case" : snakeCase(text),
    "screaming-snake-case" : screamingSnakeCase(text),
    "kebab-case" : kebabCase(text),
    "screaming-kebab-case" : screamingKebabCase(text)};
    // console.log(final_obj);
    for (const key in final_obj){
        document.getElementById(key).textContent = final_obj[key];
    }

})