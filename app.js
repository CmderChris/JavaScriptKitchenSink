var myName = 'Chris';
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