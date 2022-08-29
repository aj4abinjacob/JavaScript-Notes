let full_name, empty, ud, pi, dark_mode;
full_name = "Abin Jacob";
empty = null;
dark_mode = true;
console.log(full_name, empty, ud, dark_mode);

// 4.
const programming_languages = "javascript, python, java, c++"
console.log(programming_languages.includes("script"));

// 5. Split the string into an array using split() method
const programming_languages_array = programming_languages.split(",");
console.log(programming_languages_array);

// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(", ");
console.log(companies);

// 7. Use lastIndexOf to determine the position of the last occurrence of a script.
console.log([1, 2, 3, 4, 5, 5, 7, 5, 7, 8].lastIndexOf(5));

// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
console.log('You cannot end a sentence with because because because is a conjunction'.search("because"));
// search returns position of the word

// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
" hello world ".trim();

// 10. Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.
// false
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(0));
// all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.
// truth
console.log(Boolean("a"));
console.log(Boolean(1));
console.log(Boolean([]));

// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3 true
//     - 4 >= 3 false
//     - 4 < 3 false
//     - 4 <= 3 false
//     - 4 == 4 true
//     - 4 === 4 true
//     - 4 != 4 false
//     - 4 !== 4 false
//     - 4 != '4' false
//     - 4 == '4' true
//     - 4 === '4' false
// - Find the length of python and jargon and make a falsy comparison statement.
console.log("python".length > "jargon".length);

// 12. Use the Date object to do the following activities
const current_date = new Date();
//     - What is the year today?
console.log(current_date.getFullYear());
//     - What is the month today as a number?
console.log(current_date.getMonth() + 1);
//     - What is the date today?
console.log(current_date.getDate());
//     - What is the day today as a number?
console.log(current_date.getDate());
//     - What is the hours now?
console.log(current_date.getHours());
//     - What is the minutes now?
console.log(current_date.getMinutes());
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Math.floor(current_date.getTime() / 1000));