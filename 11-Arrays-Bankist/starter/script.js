'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Creating a function to display the movement of transactions
const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = '';
  const movs  = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}


// Creating a calc & Display balance function
const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
}

// Creating a function to add all transactions
const calcDisplaySummary = function(acc){
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`
  const withdrawals = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)}€`;
  const interest = acc.movements.filter(mov => mov > 0).map(deposit => (acc.interestRate * deposit) / 100).filter(int => int >= 1).reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest}€`;
}


// Creating a function the generate a login initial(username) from the owner's name
const createUsernames =(accs) => {
  accs.forEach(function (acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map((name) => name.charAt(0))
    .join('');
  })
}
createUsernames(accounts);

// Creating a function to update the UI
const updateUI = function(acc){
  // Display movement
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
}

// Implementing Login
let currentAccount;
btnLogin.addEventListener('click', function(e){
  // Prevents form from submitting
  e.preventDefault();
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount)

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    // Display UI Message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = '100';
    
    // Clearing input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
    
    // Update UI
    updateUI(currentAccount);
  }
  
})

// Transfer to Other Accounts
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username){
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }

  inputTransferAmount.value = '';
  inputTransferTo.value = '';

})

// Request Loan
btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = ''
})

// Delete Account
btnClose.addEventListener('click', function(e){
  e.preventDefault();

  if(currentAccount.username == inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    inputClosePin.value = '';
    inputCloseUsername.value = '';
  }
})

let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  // Changes the state of sorted each time it is clicked i.e. true - false and false - true
  sorted = !sorted;
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// Simple Array Methods
/*

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2)); // slices and print items from index 2 to the last element in the array
console.log(arr.slice(2, 4)); // slices and print items from index 2 to index 4 but not including item at index 4
console.log(arr.slice(-2)); // slices and print the last two items in the array
console.log(arr.slice(-1)); // slices and print the last item in the array
console.log(arr.slice(1, -2)); // slices out the end point and print the remaining items from d starting index
console.log(arr.slice()); // prints out the whole items in the array
console.log([...arr]); // using the spread operator to print out the items in the array

// SPLICE
// Splice method on array is mutable
// console.log(arr.splice(2)); // slices out the items from index 2 and prints the rest
arr.splice(-1); // slices out and prints the last item in the array
console.log(arr);
arr.splice(1, 2); 
console.log(arr); // slices and print out the items from index 1 to index 2 including index 2

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // reverses items in the array making the last index the first and the first the last
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2); // concatenate the two arrays together
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - ')); // print a string-like text with an hypen between every items in the array

*/


// The new at Method
/*

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

*/


// forEach Loop over Arrays
/*

// forOf vs forEachLoop
// For the forOf Loop,  while using .entries(), first element is the index while second is the value
// Continue and break statement works with forEach loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for(const [i, movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement ${i + 1} You deposited ${movement}`)
  } else{
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`)
  }
}

console.log(`----- forEach Loop ------`)
// For the forEach Loop, arguments are passed in order of element, index and array
// Continue and break statement do not work with forEach loop
movements.forEach(function(movement, i, arr){
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
})

*/


// ForEach Loop with Maps and Sets
/*

// With Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
})

// With Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map){
  console.log(`${value}: ${value}`) // we get USD: USD reason becuase sets dont have keys and indexes either
  // So we need to change the name of the key variable which in this case is an underscore which means a throwaway or unnecessary variable
})

*/

// Coding Challenge #1
/*

const checkDogs = function(dogsJulia, dogsKate){
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs =  [...dogsJuliaCorrected, ...dogsKate]
  dogs.forEach(function(dog, i){
    const dogAge = dog >= 3 ? 'an adult' : 'a puppy 🐶';
    console.log(`Dog number ${i+1} is ${dogAge} and is ${dogs[i]} years old`)
  })

}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
console.log('.');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

*/


// The Map Method
/*

// map method returns a new array containing the results of applying an operation on all original array elements
// Converting euro to usd assuming 1eur = 1.1usd
const eurToUsd = 1.1;
const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
});

const movementsUSDArrow = movements.map((mov2) => mov2 * eurToUsd);

console.log(movements);
console.log(movementsUSD);
console.log(movementsUSDArrow);

const movementsDescriptions = movements.map((move, i) => 
  `Movement ${i + 1}: You ${move > 0 ? 'deposited' : 'withdrew'} ${Math.abs(move)}`
);
console.log(movementsDescriptions);

*/


// The filter Method
/*

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

*/


// The Reduce Method
/*

console.log(movements)

// Summing up all the movements in an array
// Using normal function expression
// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`)
//   return acc + cur;
// }, 0); 

// Using arrow function
const balance = movements.reduce((acc, cur,) => acc + cur, 0);
console.log(balance);

// Using for Of Loop
let bal = 0;
for(const mov of movements) bal += mov;
console.log(bal)

// Another Example
// Getting Maximum value
// Always use the first item in the array as the starting point whenever youre trying to find a max or min value
const maxValue = movements.reduce((acc, cur) => 
  cur > acc ? acc = cur : acc = acc, movements[0]
)
console.log(maxValue);

*/


// Coding Challenge #2
/*

const calcAverageHumanAge = function(dogAges){
  const humanAge = dogAges.map((age) => age > 2 ? 16 + age * 4 : age * 2);
  const adult = humanAge.filter((age) => age > 18);
  const average = adult.reduce((acc, cur) => acc + cur) / adult.length;
  
  console.log(humanAge);
  console.log(adult);
  console.log(average)
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

*/


// The Magic of Chaining Methods
/*

const eurToUsd = 1.1;
console.log(movements);

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

*/


// Coding Challenge #3
/*

const calcAverageHumanAge2 = function (dogAges) {
  const humanAge = dogAges.map(age => (age > 2 ? 16 + age * 4 : age * 2)).filter(age => age > 18).reduce((acc, cur, i,arr) => acc + cur / arr.length, 0)

  console.log(humanAge);
};
calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

*/


// The Find Method
/*

// The find methods return the first value of which a certain condition is true
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// Using for of loop to get the same result
for(const accoun of accounts){
  if (accoun.owner === 'Jessica Davis'){
    console.log(accoun)
  }
}

*/


// The Some and Every Method
/*

console.log(movements);

// Some Method
// The some method returns true if any of the element met the required condition

// The INCLUDES method check for EQUALITY
console.log(movements.includes(-130));

// The SOME method checks for CONDITIONS
console.log(movements.some(mov => mov === -130));
console.log(movements.some(mov => mov > 0));

// Every Method
// The Every method returns true if all elements meet the required condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

*/


// flat and flatMap
/*

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

*/


// Sorting Arrays
/*

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners);
console.log(owners.sort());

// Numbers
console.log(movements);
// Sorting the movements array in ascending order
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
})
console.log(movements)

// Sorting the movements array in descending order
movements.sort((a, b) => {
  if (a > b) return -1;
  // if (a < b) return 1;
})
console.log(movements)

// Modifying the sort method
// Ascending
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
movements.sort((a, b) => b - a);
console.log(movements);
// Note: negative value switches the current element if the element before it is > it
// It is not advisable to use the sort method on arrays containing strings and numbers

*/


// More ways of creating and filling arrays
/*

// Old ways
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Filling an empty array
const x = new Array(7); // creates an empty array with length of 7
console.log(x)
// console.log(x.fill(1)); // fill the array with a value of 1
// console.log(x.fill(2, 3)) // fills the array with a value of 2 starting from index 3 and creates an empty array from index 0 - 2
console.log(x.fill(2, 2, 5)) // fills the array with 2 starting from index 2 and ends at index 5 but not include 5 just like slice

// Filling an existing array
arr.fill(23, 3, 6)
console.log(arr)

// Creating array programmatically
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});

*/


// Array Methods Practice
/*

// 1. Summing all the deposit movements in all accounts
const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, cur) => acc+cur);
console.log(bankDepositSum)

//2. Counting the number of deposits > 1000 in the movement array across all accounts
// Method 1
const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
console.log(numDeposits1000);

// Method 2 (Using reduce method)
const num2Deposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => cur >= 1000 ? count + 1 : count, 0);
console.log(num2Deposits1000);

// 3. Adding the total deposits and withdraws across all accounts in a new object
const sums = accounts.flatMap(acc => acc.movements).reduce((sums, cur) =>{
  sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
  // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
  return sums;
}, {deposits: 0, withdrawals: 0})
console.log(sums);

// 4. Creating a function that converts a string to sentence case except for some exceptions
const convertTitleCase = function(title){
  const capitzalize =  str => str[0].toUpperCase() + str.slice(1)
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');
  return capitzalize(titleCase);
}
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

*/


// Coding Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Number 1
dogs.forEach(dog => dog.recFood =  Math.trunc(dog.weight ** 0.75 * 28))

// Number 2
const sarahDog = dogs.find(dog => dog.owners.includes("Sarah"))
console.log(`Sarah dog is eating too ${sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'}`)

// Number 3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch, ownersEatTooLittle)

// Number 4
console.log( `${ownersEatTooMuch.join(' and ')}'s dog eats too much`)
console.log( `${ownersEatTooLittle.join(' and ')}'s dog eats too little`)

// Number 5
console.log(`${dogs.some(dog => dog.curFood === dog.recFood)}`)

// Number 6
const checkEatingOkay = dog => dog.curFood >= 0.9 * dog.recFood && dog.curFood <= 1.1 * dog.recFood;
console.log(dogs.some(checkEatingOkay));