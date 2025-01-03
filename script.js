console.log('Hello!');
// exercise 1 classwork
// Question 1

const car = {
  brand: 'Toyota',
  model: 'Corolla',
};
// console the brand property of car
// using dot notation
console.log(car.brand, ',using dot notation');
// using bracket notation
console.log(car['brand'], ',using bracket notation');

// console the model property of the object
console.log(car.model, ',using dot notation');
console.log(car['model'], ',using bracket notation');

// change the brand property to honda
// using dot notation
// car.brand = 'honda';
// using bracket notation
car['brand'] = 'honda';

// console updated car object
console.log('updated car', car);

// 1.5 add 2 more property to the car object year and color, year 2022 and color blue
car.color = 'blue';
car.year = 2022;
console.log(car);

// 1.6 use for in to print all the peoperties of the car object
for (let key in car) {
  console.log(key, ':', car[key]);
}

// exercise 2

const citizen = {
  name: 'ramesh kumar',
  age: 65,
  occupation: 'retired',
};
// 2.1
citizen.age = 68;
console.log(citizen);
// 2.2 add 2 in age
citizen.age = citizen.age + 2;
console.log(citizen);
// add city delhi and print key value pair
citizen.city = 'Delhi';
for (let key in citizen) {
  console.log(`${key} : ${citizen[key]}`);
}

//classwork 2

console.log('-----------------------------------------------------------');

// q1
const citizen2 = {
  name: 'sandeep',
  age: 65,
};
if (citizen2.age >= 60) {
  console.log(`${citizen2.name} is a senior citizen`);
} else {
  console.log(`${citizen2.name} is not a senior citizen`);
}
citizen2.bp = 'Normal';
// 1.3
if (citizen2.age >= 60 && citizen2.bp == 'Normal') {
  console.log('Fit to travel');
} else {
  console.log('Not Fit to travel');
}

// q 2
const person = {
  name: 'Rajesh',
  age: 36,
  isBirtday: true,
};

const incrementAge = (person) => {
  console.log(person);
  const newPerson = { ...person };
  console.log('is both same', person === newPerson);
  if (newPerson.isBirtday === true) {
    newPerson.age = newPerson.age + 1;
    console.log('updated new person', newPerson);
  }
};
incrementAge(person);

// q 3
const emp1 = {
  name: 'Amit',
  hoursWorked: 160,
};
const emp2 = {
  name: 'Suresh',
  hoursWorked: 180,
};
const checkHours = (emp1, emp2) => {
  if (emp1.hoursWorked > emp2.hoursWorked) {
    return true;
  } else {
    return false;
  }
};
console.log(checkHours(emp1, emp2));
