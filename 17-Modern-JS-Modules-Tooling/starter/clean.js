const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

spendingLimits.jay = 200; // would not work i.e. spendingLimits can no longer change
console.log(spendingLimits);

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (state, limits, value, description, user='jonas') {
  // if (!user) user = 'jonas';
  // user = user.toLowerCase();
  const cleanUser = user.toLowerCase();

  // refacturing downward👇
  /* let lim;
  if (spendingLimits[user]) {
    lim = spendingLimits[user];
  } else {
    lim = 0;
  } */

  // using tenary operator
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // using optional chaining plus nullish coalescing operator

  /* if (value <= getLimit(cleanUser)) {
    // budget.push({ value: -value, description: description, user: user });
    // using enhanced object literal syntax
    budget.push({ value: -value, description, user : cleanUser });
  } */

  return value <= getLimit(limits, cleanUser) ? [...state, { value: -value, description, user : cleanUser }] : state;
};
const newBudget1  = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1)
const newBudget2  = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3  = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget2, newBudget3);

const checkExpenses = function (state, limits) {
  for (const entry of budget) {

    /*let lim;
    if (spendingLimits[entry.user]) {
      lim = spendingLimits[entry.user];
    } else {
      lim = 0;
    }*/

    // const limit = spendingLimits?.[entry.user] ?? 0;

    if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
  }

  state.map(entry => entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'} : entry )
};
checkExpenses(newBudget3, spendingLimits);

console.log(budget);

const logBigExpenses = function (state, bigLimit) {
  // let output = '';
  // for (const entry of budget) {
  //   if (entry.value <= -bigLimit) {
  //     // output += `${entry.description.slice(-2)}  / `; // Emojis are 2 chars
  //     output += entry.value <= -bigLimit ? `${entry.description.slice(-2)}  / ` : '';
  //   }
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);

  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  console.log(bigExpenses)
};
logBigExpenses(newBudget3, 1000);


const addIncome = function(state){
  const income = state.filter(entry => entry.value > 0).map(entry => entry.value).reduce((val, cur) => val += cur, 0)
  console.log(`Total income is ${income}`)
}

addIncome(newBudget3);

const totalExpenses = function(state){
  const expenses = state.filter(entry => entry.value < 0).map(entry => entry.value).reduce((acc, cur) => acc += cur, 0)
  console.log(`Total expenses is ${expenses}`);
}
totalExpenses(newBudget3);