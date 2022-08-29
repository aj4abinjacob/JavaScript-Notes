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
