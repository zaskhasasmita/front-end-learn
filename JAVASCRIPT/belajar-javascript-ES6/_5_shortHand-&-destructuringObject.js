const nama  = 'Jeki'
const umur = 20

getData = () => {
    return `member ${nama} umurnya ${umur}`
}

let member = {
    nama , umur, getData
}

console.log(member.getData());


// des
var person = { 
    name: 'Zaskha', 
    age : 20, 
    city: 'new york' 
}

// // tanpa destructuring
// let name = person.name
// let age = person.age
// let city = person.city


// dengan destructuring
let {name, age, city} = person