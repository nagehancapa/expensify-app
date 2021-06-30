// Object destructuring

const person = {
  name: "Nagehan",
  age: 33,
  location: {
    city: "Eindhoven",
    temp: 32,
  },
};

const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = book.publisher;
console.log(publisherName);

// Array destructuring

const address = ["Fransebaan", "Eindhoven", "Netherlands", "5627"];
const [, city1, country = "Turkey"] = address;

console.log(`You are in ${city1} ${country}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
