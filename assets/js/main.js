// -----lev1_1-----
console.log('%c-----lev1_1-----', 'color: lightgreen');
class Ball {
  constructor(ballType) {
    this.ballType = ballType;
    if(this.ballType == '') {
      this.ballType = 'regular';
    }
  }
}

let ball1 = new Ball('');
let ball2 = new Ball('super');
console.log(ball1.ballType);
console.log(ball2.ballType);


// -----lev1_2-----
console.log('%c-----lev1_2-----', 'color: lightgreen');
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

let person = new Person('Emanuela', 18);
person.info();


// -----lev1_3-----
const result = document.querySelector('#result');
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const examCheck = document.querySelector('#examCheck');
const button = document.querySelector('#button');

let listItem;

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`${this.name} is ${this.age} years old.`);
  }

  write() {
    listItem = document.createElement('li');
    listItem.textContent = `${this.name}, ${this.age} years old.`;
    result.appendChild(listItem);
  }
}

button.addEventListener('click', () => {
  if(name.value == 0 || age.value == 0) {
    return;
  } else {
    let people1 = new People(name.value, age.value);
    people1.write();

    if(examCheck.checked == false) {
      listItem.style.color = 'red';
    }
  }
});
