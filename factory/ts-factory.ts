interface Pizza {
    name: string
    getName(): string
    cookingTime(): void
    eat(): void
}

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

interface PizzaFactory {
    makePizza(pizza: Pizza): Pizza
}

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

const newYorkRestaurant: NewYorkRestaurant = new NewYorkRestaurant()
const chicagoRestaurant: ChicagoRestaurant = new ChicagoRestaurant() 

const myNewYorkPizza = newYorkRestaurant.makePizza()
const myChicagoPizza = chicagoRestaurant.makePizza()

const newYorkPizzaName = myNewYorkPizza.getName()
console.log(`NY pizza name is: ${newYorkPizzaName}`)
myNewYorkPizza.cookingTime()

const chicagoPizzaName = myChicagoPizza.getName()
console.log(`NY pizza name is: ${chicagoPizzaName}`)
myChicagoPizza.cookingTime()