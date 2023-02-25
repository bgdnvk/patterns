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
        return str.toUpperCase()
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