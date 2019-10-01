let myName = 'Chris';
const numOfStates = 50;
let add = 5 + 4;

function sayHello() {
  console.log('Hello World!')
};

sayHello();

// Write a function that checks age
function checkAge(name, age) {
  if (age < 21) {
    alert('Sorry ' + name + ',you aren\'t old enough to view this page!');
  };
};

checkAge('Charles', 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("Mark", 17);

let favoriteVegetables = ['Onions', 'Carrots', 'Squash', 'Tomatoes', 'Dumbass'];

for (let i = 0; i < favoriteVegetables.length; i++) {
  console.log(favoriteVegetables[i]);
}

// let family = [['Emily', 24], ['Keith', 60], ['Carol', 59], ['Oliver', 1], ['Julian', 3]];
const family = [
  {
    name: 'Emily',
    age: 24
  },
  {
    name: 'Keith',
    age: 60
  },
  {
    name: 'Carol',
    age: 59
  },
  {
    name: 'Oliver',
    age: 1
  },
  {
    name: 'Julian',
    age: 3
  },
  {
    name: 'MY FRIEND LUKE LMAO',
    age: 999
  },
];
for (let i = 0; i < family.length; i++) {
  checkAge(family[i].name, family[i].age);
};

function getLength(word) {
  return word.length
};


// let helloLength = getLength('Hello World!');
  
function oddOrEven(wordLength) {
  if (wordLength % 2 === 0) {
    console.log('The world is nice and even!');
  } else {
    console.log('The world is an odd place!');
  };
};

oddOrEven(getLength('Hello World'));