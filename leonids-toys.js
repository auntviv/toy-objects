// Barbie, Racecar,Giant Nutcracker, Train Set, Portable Gaming System (id ;string, name; string, maker; string, price; number float, age; number)
const toyToFind = 2

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

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1

    const currentLastToy = toys[lastIndex]
         
    const maxId = currentLastToy.id

    const idForNewToy = maxId +1

    toyObject.id = idForNewToy

    toys.push(toyObject)
    }
        
    const xbox = {
        name: "XBox",
        maker: "Playstation",
        price: 500.27,
        age: 10
    }

addToyToInventory(xbox)


 for (const toy of toys) {
    console.log(`This is a ${toy.name} made by ${toy.maker} it costs $${toy.price} for ages ${toy.age} and up.`)
}
   console.log(toys)

 
