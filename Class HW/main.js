import * as country from "./countries.js"
import {web_tech} from "./web_techs.js";

console.log(web_tech);
console.log(country.countries);
if (!country.countries.includes("Ethiopia")) country.countries.push("Ethiopia");
console.log(country.countries);
