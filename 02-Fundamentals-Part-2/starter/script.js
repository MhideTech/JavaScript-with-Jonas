/////////////////// First Challenge
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (scoreDolphins, scoreKoalas){
    if(scoreDolphins > 2* scoreKoalas){
        console.log(`Team Dolphin win (${scoreDolphins} vs. ${scoreKoalas})`)
    }
    else if(scoreKoalas > 2 * scoreDolphins){
        console.log(`Team Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    }
    else{
        console.log(`The game is a draw; nobody wins`)
    }
}

checkWinner(scoreDolphins, scoreKoalas);
*/




/////////////////////// Second Challenge
/*
let  tips;
function calcTip(bills){
    if(bills >= 50 && bills <= 300){
        return 0.15 * bills
    } else{
        return 0.2 * bills
    }
}

let bills = [125, 555, 44]
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(bills, tips, total);
*/






/////// Objects Practise
/* 
const Orlah = {
    firstName: "Mhizta",
    lastName: "Orlah",
    age: 2023 - 2000,
    job: "Software Engineer",
    friends: ['Ibrahim', 'Faltom', 'Divine', 'Shalom', 'Okoh'],
    // Adding a function inside an Object
    calcAge: function(birthYeah){
        return 2023 - birthYeah;
    },
    calcAge2: function(){
        return 2023 - this.age
    }
}
// adding location to the objects
Orlah.location = "Lagos, Nigeria";

const interestedIn = prompt("What do you want to know about Orlah? Choose between firstName, lastName, age, job, location and friends");
if(Orlah[interestedIn]){
    alert(Orlah[interestedIn]);
} else{
    alert("Wrong request! Choose between firstName, lastName, age, job and friends")
}
console.log(Orlah.firstName + ' ' + Orlah.lastName + " has " + Orlah.friends.length + " friends, and his best friend is " + Orlah.friends[0]);
console.log(`${Orlah.firstName} ${Orlah.lastName} has ${Orlah.friends.length} friends and his best friend is ${Orlah.friends[0]}`);

// 2 ways to Calling out function in the Object
console.log(Orlah.calcAge(2000));
console.log(Orlah['calcAge'](2002));

// calling calcAge2 to the console
console.log(Orlah.calcAge2());

// To create another value in an object, we can say this. then the variable name e.g. this.age = 2023 - 2003
// When using the this. keyword, it has to be inside the function

/*
    hasDriverLicense: true;
    so now we want to check and assign a message to if hasDriverLicense is true or not
    hasDriverLicense ? 'true message' : 'false message'
*/



//////////////// Challenge 3
const mark = {
    fullname: "Mark Muller",
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    }
}

const john = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    }
}
mark.calcBMI()
john.calcBMI()


if(mark.bmi > john.bmi){
    console.log(`${mark.fullname} BMI ${mark.bmi} is higher than ${john.fullname}'s BMI ${john.bmi}`)
}else{
    console.log(`${john.fullname} BMI ${john.bmi} is higher than ${mark.fullname}'s BMI ${mark.bmi}`)
}



///////////////////// For Loop
for (let rep = 1; rep <= 30, rep++;){
    console.log(`Lifting weights repition ${rep}`)
}

const Orlah = {
    firstName: "Mhizta",
    lastName: "Orlah",
    age: 2023 - 2000,
    job: "Software Engineer",
    friends: ['Ibrahim', 'Faltom', 'Divine', 'Shalom', 'Okoh'],
}

for(let i = 0; i <= Orlah.length - 1; i++){
    console.log(Orlah[i])
}