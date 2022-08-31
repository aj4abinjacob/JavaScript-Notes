// import * as country from "./countries.js"
// import {web_tech} from "./web_techs.js";

const country = require("./countries.js")

// console.log(web_tech);
// console.log(country.countries);
// if (!country.countries.includes("Ethiopia")) country.countries.push("Ethiopia");
// console.log(country.countries);

// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

const include_land = country.countryList.filter(el => el.includes("land"));
console.log(include_land);

const max_ch_country = country.countryList.reduce((p,c) => (p.length > c.length) ? p : c);
console.log(max_ch_country);

const four_ch_coutry = country.countryList.filter(el=> el.length === 4);
console.log(four_ch_coutry);

const two_or_more_words = country.countryList.filter(el => el.split(" ").length >= 2 );
console.log(two_or_more_words);

const reverse_title = country.countryList.sort().map(countr => {
    let proper = "";
    countr.split(" ").forEach((el)=>{
        proper += el[0].toUpperCase() + el.slice(1) + " ";
    })
    return proper.trim();
})
console.log(reverse_title);

