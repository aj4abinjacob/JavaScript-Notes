
// Array length property
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.length);

// Array methods

// push
const students = ['Arun', 'Alen', 'Sumit'];
students.push('Bipin'); 
console.log(students); // [ 'Arun', 'Alen', 'Sumit', 'Bipin' ]
students.push('Kelvin', 'Ivan');
console.log(students); // [ 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin', 'Ivan' ]

// unshift
console.log(students); // [ 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin', 'Ivan' ]
students.unshift('Abhilash', 'Abin');
console.log(students); // ['Abhilash', 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin', 'Ivan']

// pop
console.log(students); // ['Abhilash', 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin', 'Ivan']
students.pop();
console.log(students); // ['Abhilash', 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']

//  shift
console.log(students); // ['Abhilash', 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
students.shift();
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']

// slice
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
console.log(students.slice(3)); // ['Sumit', 'Bipin', 'Kelvin']
console.log(students.slice(0,3)); // ['Abin', 'Arun', 'Alen']

// filter
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
console.log(students.filter(el => el.endsWith('n'))); // [ 'Abin', 'Arun', 'Alen', 'Bipin', 'Kelvin' ]

// splice
const days = ['Wed', 'Thu', 'Fri', 'Sat'];
days.splice(0,0,'Sun', 'Mon', 'Mon');
console.log(days); // [ 'Sun', 'Mon', 'Mon', 'Wed', 'Thu', 'Fri', 'Sat' ]
days.splice(2,1,'Tue');
console.log(days); // [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]

// fill
console.log(days); // [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
days.fill('Fri',5);
console.log(days); // [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Fri' ]
days.fill('Sun',0,3);
console.log(days); // [ 'Sun', 'Sun', 'Sun', 'Wed', 'Thu', 'Fri', 'Sat' ]



// indexOf
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
console.log(students.indexOf("Sumit")); // 3
console.log(students.indexOf("Paul")); // -1

// at
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
console.log(students.at(-2)); // Bipin
console.log(students.at(1)) // Arun

// includes
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
console.log(students.includes('Abin')); // true
console.log(students.includes('Tony')); // false

// find
const birth_year = [1999,1987,2000,2001,1995,2005,1975];
const born_after_2000 = birth_year.find(el => el > 2000);
console.log(born_after_2000); // 2001
console.log(birth_year.find(el => el > 2022)); // undefined

// findIndex
console.log(birth_year); // [1999,1987,2000,2001,1995,2005,1975];
console.log(birth_year.findIndex(el => el > 2000)); // 3
console.log(birth_year.findIndex(el => el > 2022)); // -1 

// every
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
console.log(students.every(el => el.startsWith('A'))); // false

// some
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
console.log(students.some(el => el.startsWith('A'))); // true

// sort
console.log(students); // [ 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
students.sort();
console.log(students); // [ 'Abin', 'Alen', 'Arun', 'Bipin', 'Kelvin', 'Sumit' ]

// reverse
numbers = [1, 2, 3, 4, 7, 5, 6]; 
numbers.reverse();
console.log(numbers); // [ 6, 5, 7, 4, 3, 2, 1 ]

// map
console.log(students); // [ 'Abin', 'Alen', 'Arun', 'Bipin', 'Kelvin', 'Sumit' ]
console.log(students.map(el => el.toUpperCase())); // [ 'ABIN', 'ALEN', 'ARUN', 'BIPIN', 'KELVIN', 'SUMIT' ]
console.log(students); // [ 'Abin', 'Alen', 'Arun', 'Bipin', 'Kelvin', 'Sumit' ]

