// #1 create a variable called 'myName' and assign it to your name as a string.

// CODE HERE
var myName = "Preston"; 

// #2 create a variable called 'iLoveCode' and assign it the value of 'myName' + loves code as a string.

// CODE HERE
var iLoveCode = myName + " loves code"; 

// ARROW FUNCTIONS
// #3 using the arrow syntax, create a function called 'wildNameReturn' that takes in variable as a parameter. Return the variable inside of the function with the word 'wild' in front so it returns "wild Bryan" and then invoke wildNameReturn using the 'myName' variable you created as an argument.

// CODE HERE
var wildNameReturn = (myName) => "wild " + myName; 
wildNameReturn(myName);

// #4 using the arrow syntax, create a function called 'sum' that takes in a number and returns that number added to itself.

// CODE HERE
var sum = (num) => num += num; 

// #5 using the arrow syntax, create a function called 'greeter' that takes in two parameters, name & age. greeter should return a string like this "Hi, I'm Bryan and I am 27 years old." but replacing the name and age with the passed in values. The test on this question is very strict on casing and punctuation.

// CODE HERE
var greeter = (name, age) => "Hi, I'm " + name + " and I am " + age + " years old."; 

// #6 using the arrow syntax, create a function called 'animalSounds'. animalSound takes three parameters: name, sound and a callback. animalSound should return something like this "I am wild Bryan. Hear me woof." when invoked using the wildNameReturn function you previously created as the callback.

// CODE HERE
var animalSounds = (name, sound, callback) => {
  return "I am wild " + name + ". Hear me " + sound + ".";
}

// CALLBACKS
// Here we will write a function that takes in a callback as a parameter. You must write the callback function to make the existing function work properly.
// EXAMPLE
// You would create the sayHi function here
var sayHi = (str, callback) =>{
  callback(str);
 }
// So you can use it down here
 sayHi('Hi Lindsey', thingToSay =>{
    alert(thingToSay); //should alert ('Hi Lindsey')'
 });
 // You can comment out the above code so it doesn't run every time you refresh your page.

// #7 using the arrow syntax, write a function called 'first' that returns the first item of the array
var names = ['Bryan', 'Jeremy', 'Joe', 'Megan', 'Ian', 'Taylor'];

// CODE HERE
var first = (name, callback) => callback(name[0]); 

first(names, firstName => {
  console.log(`The first name in names is ${firstName}`);
  return firstName;
});

// #8 using the arrow syntax, write a function called 'multiply' that multiplies two numbers. Invoke the callback with the result of the multiplication.

// CODE HERE
var multiply = (num1, num2, callback) => callback(num1 * num2);


multiply(4,3, answer => {
  console.log(`the answer is ${answer}`)
});

// #9 using the arrow syntax, write a function called 'last' that returns the last name in the previously crated names array using a callback function.

// CODE HERE
var last = (name, callback) => callback(name.pop());

last(names, lastName =>{
  console.log(`The last name in names is ${lastName}`);
  return lastName;
});

// #10 using the arrow syntax, write a function called 'sizer' that returns the larger of two numbers that are passed in using a callback function.

// CODE HERE
var sizer = (num1, num2, callback) => {
  if (num1 > num2) {
    return callback(num1);
  } else {
    return callback(num2);
  }
}

sizer(300, 33, bigger => {
  console.log(`${bigger} is the larger number`);
  return bigger;
});


// METHODS ON ARRAYS
var friends = ['Cam', 'Corey', 'Landy'];

// #11 add the name 'Harry' to the end of the friends array

// CODE HERE
friends.push('Harry');

// #12 assign 'shortNames' the return value of any names shorter than four characters from the friends array

var shortNames = friends.filter(word => word.length <= 4); // CODE HERE

// #13 here we have created a NickNameMaker function that will shorten names to the begninning two Characters so 'Cam' will be 'CaCa. Using the nickNameMaker function, map over the previously created friends array to return the friends nick names and assign it to 'shorty'.

var nickNameMaker = (name) => {
  return name.split('').slice(0,2).join('') + name.split('').slice(0,2).join('');
}

// CODE HERE
var shorty = friends.map(nickNameMaker);

// #14 assign 'evens' the return value of even numbers from the numbers array
var numbers = [1, 25, 6, 88, 47, 77, 333, 500];

// CODE HERE
var even = function (num) {
  return num % 2 === 0;
};
var evens = numbers.filter(even);

// #15 using the previously created numbers array, map over each number and add 3 to it and assign it to 'plusThree'.

// CODE HERE
var plusThree = numbers.map(function(element) {
  return element + 3;
});


// #16 using the 'goodPeople' array of objects, add a new key value pair of 'family: true' to each object. Hint: use forEach
var goodPeople = [{name: 'George'}, {name: 'Randi'}, {name: 'Lindsey'}]


// CODE HERE
goodPeople.forEach(x => { x.family = true });