/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = []

console.log('Exercise 1 result:', foods)

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

let foods = []

foods.unshift('pizza')
foods.push('cheeseburger')

console.log('Exercise 2 result:', foods)

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/
let foods = ['pizza', 'burger', 'sushi']

foods.unshift('taco')

console.log('Exercise 3 result:', foods)

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

const foods = ['burger', 'sushi', 'pizza', 'pasta', 'salad']

const favFood = foods[2]

console.log('Exercise 4 result:', favFood)

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

let foods = ['pizza', 'cheeseburger']

foods.splice(1, 0, 'tofu')

console.log('Exercise 5 result:', foods)

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

let foods = ['burger', 'pizza', 'salad', 'pasta']

let index = foods.indexOf('pizza')

if (index !== -1) {
  foods.splice(index, 1, 'sushi', 'cupcake')
}

console.log('Exercise 6 result:', foods)

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

const food = ['pizza', 'sushi', 'burger', 'cupcake', 'pasta']

const yummy = food.slice(1, 3)

console.log('Exercise 7 result:', yummy)

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

const foods = ['apple', 'banana', 'tofu', 'carrot', 'chicken']

const soyIdx = foods.indexOf('tofu')

console.log('Exercise 8 result:', soyIdx)

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

const foods = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger']

const allFoods = foods.join(' -> ')

console.log('Exercise 9 result:', allFoods)

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const foods = ['pizza', 'salad', 'soup', 'pasta', 'bread']

const hasSoup = foods.includes('soup')

console.log('Exercise 10 result:', hasSoup)
