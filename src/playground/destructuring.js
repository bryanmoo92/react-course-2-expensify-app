// CONST Destructuring
//
// console.log('destructuring')
// 
// const person = {
//     name: 'Bryan',
//     age: 28,
//     location: {
//         city: 'Los Angeles',
//         temp: 70
//     }
// };
// 
// const {name, age} = person;
// // const name = person.name;
// // const age = person.age;
// 
// console.log(`${name} is ${age}.`)
// 
// const {city, temp: temperature} = person.location;
// console.log(`It's ${temperature} in ${city}`)
// 
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// 
// const {name: publisherName = 'Self-Published'} = book.publisher;
// 
// console.log(`${publisherName}`)

// Array Destructuring

const address = ['76 Oak Street', 'Westhampton Beach', 'New York', '11978']
const [, city, state='California', zip_code] = address;
console.log(`You are in ${city}, ${state}`)