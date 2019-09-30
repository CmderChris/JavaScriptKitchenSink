let myName = 'Chris';
const numOfStates = 50;
let add = 5 + 4;

function sayHello() {
    console.log('Hello World!')
};

sayHello();

function checkAge(name, age) {
    if (age < 21) {
      alert(`Sorry ${name}, you aren't old enough to view this page!`);
    };
  };

checkAge ('Charles', 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("Mark", 17);

let favoriteVegetables = ['Onions', 'Carrots', 'Squash', 'Tomatoes'];

for(let i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables [i]);
}

let family = [['Emily', 24], ['Keith', 60], ['Carol', 59], ['Oliver', 1], ['Julian', 3]];

for (let i = 0; i < family.length; i++) {
    checkAge(family[i][0], family[i][1]);
  };

function getLength(word) {
    console.log(word.length);
  };

let helloWorld = ('Hello World');
getLength(helloWorld);

function oddOrEven(wordLength) {
    if (wordLength.length % 2 === 0) {
      console.log('The world is nice and even!');
    } else {
      console.log('The world is an odd place!');
    };
  };
  
  oddOrEven(helloWorld);