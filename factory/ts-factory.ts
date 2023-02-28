//pizza is going to be the product that a factory can make
interface Pizza {
    name: string
    getName(): string
    cookingTime(): void
    eat(): void
}

//this is just an example, NY pizza is different from Chicago pizza
class NewYorkPizza implements Pizza {

    name: string

    constructor(name: string) {
        this.name = name
    }

    getName(): string {
        return this.name
    }

    cookingTime(): void{
       console.log('15min') 
    }

    eat(): void {
        console.log('eating NY pizza')
    }
}

class ChicagoPizza implements Pizza {

    name: string

    constructor(name: string) {
        this.name = name
    }

    getName(): string {
        return this.name
    }
    cookingTime(): void {
        console.log('30min')
    }
    eat(): void {
        console.log('eating Chicago pizza')
    }
}

//this is our creator, we can use this interfece anywhere in order to make our products(pizzas)
interface PizzaFactory {
    makePizza(pizza: Pizza): Pizza
}

//lets think of different restaurants that want to make pizzas
class NewYorkRestaurant implements PizzaFactory {

    makePizza(): Pizza {
        return new NewYorkPizza('best NY pizza')
    }
}

class ChicagoRestaurant implements PizzaFactory {

    makePizza(): Pizza {
        return new ChicagoPizza('best Chicago pizza')
    }
}

//create our factories
const newYorkRestaurant: NewYorkRestaurant = new NewYorkRestaurant()
const chicagoRestaurant: ChicagoRestaurant = new ChicagoRestaurant() 

//get the product
const myNewYorkPizza = newYorkRestaurant.makePizza()
const myChicagoPizza = chicagoRestaurant.makePizza()

//here we use our products
//this is a simple example but remember you can add a lot more logic and extend the examples
//the point of the pattern is so that you could use the factories anywhere you need
//and modify the logic inside
//try adding a delivery method for example to one of the restaurants or something concrete to the pizzas
const newYorkPizzaName = myNewYorkPizza.getName()
console.log(`NY pizza name is: ${newYorkPizzaName}`)
myNewYorkPizza.cookingTime()

const chicagoPizzaName = myChicagoPizza.getName()
console.log(`NY pizza name is: ${chicagoPizzaName}`)
myChicagoPizza.cookingTime()