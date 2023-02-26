//define interface we will use for different strategies
interface Strategy {
    execute(str: string): string
}

//define different strategies we could use
class upperCaseStrategy implements Strategy {

    public execute(str: string): string {
        return str.toUpperCase()
    }
}

class lowerCaseStrategy implements Strategy {

    public execute(str: string): string {
        return str.toLowerCase()
    }
}

class Context {

    //we will be using a different strategy for every situation
    //however here we just define a parameter of type Strategy
    //that will be changed as we wish
    private strategy: Strategy

    //while making the object we will include the strategy to use
    constructor(strategy: Strategy) {
        this.strategy = strategy
    }

    //in case we want to change out strategy we have a method for that
    public setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }

    //we will get back the modified string according to the strategy we use
    public executeStrategy(str: string): string{
        return this.strategy.execute(str)
    }
}


//define a string we will be using for testing
const randomString = 'rAnDoM sTrInG'
console.log('inittial string:', randomString)
//make a new context with the upper case strategy
const context = new Context(new upperCaseStrategy())
//use the current strategy (which is upperCase) to get an upper case String
const upperCaseString = context.executeStrategy(randomString)
//check it's upper case
console.log('upper case:', upperCaseString)
//change context's strategy
context.setStrategy(new lowerCaseStrategy())
//get the lower case string with a different strategy
const lowerCaseString = context.executeStrategy(upperCaseString)
//check it's lower case
console.log('lower case:', lowerCaseString)