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
#### push
The push() method adds one or more elements to the end of an array and returns the new length of the array. 
```JavaScript
// Push
const students = ['Arun', 'Alen', 'Sumit'];
students.push('Bipin'); 
console.log(students); // [ 'Arun', 'Alen', 'Sumit', 'Bipin' ]
students.push('Kelvin', 'Ivan');
console.log(students); // [ 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin', 'Ivan' ]
```

#### unshift  
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. 
```JavaScript
students.unshift('Abhilash', 'Abin');
console.log(students); // ['Abhilash', 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin', 'Ivan']
```

#### pop
Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
```JavaScript
students.pop();
console.log(students); // ['Abhilash', 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
```

### shift
Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
```JavaScript
students.shift()
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']
```


