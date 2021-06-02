// Barbie, Racecar,Giant Nutcracker, Train Set, Portable Gaming System (id ;string, name; string, maker; string, price; number float, age; number)
const toys = [
    {
        id: 1,
        name: "Barbie",
        maker: "Mattel",
        price: 45.50,
        age: 3
    },
    {
        id: 2,
        name: "Racecar",
        maker: "Nascar",
        price: 25.99,
        age: 7
    },
    {
        id: 3,
        name: "Giant Nucracker",
        maker: "Disney",
        price: 250.75,
        age: 10
    },
    {
        id: 4,
        name: "Train Set",
        maker: "FAO Schwarz",
        price: 50.00,
        age: 5
    },
    {
        id: 5,
        name: "Portable Gaming System",
        maker: "Nintendo",
        price: 425.99,
        age: 13
    }
]
for (const toy of toys) {
    console.log(`The Price of this toy is $${toy.price}`)
}
for (const toy of toys) {
    console.log(`The name of this toy is ${toy.name}`)
}
for (const toy of toys) {
    console.log(`This toy is manufactued by ${toy.maker}`)
}
for (const toy of toys) {
    console.log(`For ages ${toy.age} + and up`)
}

const toys = [
    // Add your objects here
]

console.log(toys)
