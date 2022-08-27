# Arrays

1. What are arrays?  
An array is a JavaScript object used for storing collection of items under a single variable. It can be used for storing string, number, other objects, arrays etc.

```JavaScript
const countries = ['India', 'Nepal', 'Germany', 'Canada'];
const person = ['Jerry', 25, ['New York', 'jerry@example.com'], true];
```

### Array Properties
>Properties are the values associated with a JavaScript object.
#### length
The array length property returns the number of elements inside an array.
```JavaScript
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(number.length); // It prints 7 as the length
```

---
## Array Methods
>A JavaScript method is a property containing a function definition.

### Inserting elements
---
#### push
The push() method adds one or more elements to the *end* of an array and returns the new length of the array. 
```JavaScript
// Push
const students = ['Arun', 'Alen', 'Sumit'];
students.push('Bipin'); 
console.log(students); // [ 'Arun', 'Alen', 'Sumit', 'Bipin' ]
students.push('Kelvin', 'Ivan');
console.log(students); // [ 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin', 'Ivan' ]
```

#### unshift  
The unshift() method adds one or more elements to the *beginning* of an array and returns the new length of the array. 
```JavaScript
console.log(students); // [ 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin', 'Ivan' ]
students.unshift('Abhilash', 'Abin');
console.log(students); // ['Abhilash', 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin', 'Ivan']
```

### Removing elements
---
#### pop
Removes the *last* element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
```JavaScript
console.log(students); // ['Abhilash', 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin', 'Ivan']
students.pop();
console.log(students); // ['Abhilash', 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
```

#### shift
Removes the *first* element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
```JavaScript
console.log(students); // ['Abhilash', 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
students.shift()
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
```

### Finding elements
---
#### indexOf
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. 
```JavaScript
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
console.log(students.indexOf("Sumit")); // 3
console.log(students.indexOf("Paul")); // -1
```
#### at
The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
```JavaScript
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
console.log(students.at(-2)); // Bipin
console.log(students.at(1)) // Arun
```

#### includes
Determines whether an array includes a certain element, returning true or false as appropriate.
```JavaScript
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
console.log(students.includes('Abin')); // true
console.log(students.includes('Tony')); // false
```

#### find
Returns the value of the *first* element in the array where predicate is true, and undefined otherwise.
```JavaScript
const birth_year = [1999,1987,2000,2001,1995,2005];
const born_after_2000 = birth_year.find(el => el > 2000);
console.log(born_after_2000); // 2001
console.log(birth_year.find(el => el > 2022)); // undefined
```

#### findIndex
Returns the index of the first element in the array where predicate is true, and -1 otherwise.
```JavaScript
console.log(birth_year); // [1999,1987,2000,2001,1995,2005];
console.log(birth_year.findIndex(el => el > 2000)); // 3
console.log(birth_year.findIndex(el => el > 2022)); // -1 
```

