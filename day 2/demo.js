//Converting Arrays to Strings
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
//join-->joins all array elements into a string.
console.log(fruits.join(" * "));
//pop-->last element from an array
console.log(fruits.pop());
//push-->add the element from an array
console.log(fruits.push("watermelon"));
console.log(fruits);
//shift-->Removes the first element "Banana" from fruits
console.log(fruits.shift());
//unshift-->Adds a new element to fruits
console.log(fruits.unshift());
console.log(fruits)
//delete-->delete the list of an array
console.log(delete fruits[0]);
//splice-->method can be used to add new items to an array
console.log(fruits.splice(2, 0, "lemon", "banana"));
console.log(fruits);
// concat() -->method can take any number of array arguments
var arr1 = ["sona", "devi"];
var arr2 = ["apple", "mango", "watermelon"];
var arr3 = ["one", "two"];
var myChildren = arr1.concat(arr2, arr3); 
console.log(myChildren);
//Slicing an Array
console.log(fruits.slice(1));
//replace
var list = ["January","March","April", "June"]; 
console.log(list.splice(1, 0, "February"));
console.log(list);


