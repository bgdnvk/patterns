//subject or event manager/dispatcher
interface Observable {
    //add the observers we want to track out observable
    add(observer: Observer): void
    //same but delete
    remove(observer: Observer): void
    //notify all of the observers
    notify(): void
}

//event listener
interface Observer {

    name: string
    //the update method will be triggered when the observable uses it
    //you can pass the observable to get more context or not
    update(observable: Observable): void
}

//since a lot of the examples use Subject instead of Observable let's call our class Subject
//it will be the one notifying the different observers
class Subject implements Observable {

    name: string

    constructor(name: string) {
        this.name = name
    }

    //using a Map but this can just be an array
    private observersMap: Map<Observer['name'], Observer> = new Map<Observer['name'], Observer>

    //add the observer/subscriber to our observable/subject
    public add(observer: Observer): void {

        this.observersMap.set(observer.name, observer)
        console.log(`added observer ${observer.name} to ${this.name}`)
    }

    public remove(observer: Observer): void {

        this.observersMap.delete(observer.name)
        console.log(`removed observer ${observer.name} to ${this.name}`)
    }

    //we do a forEach on our map so we can press the update method in all of them and pass the current observable/subject
    public notify(): void {
        
        //note that we allow to pass the instance of our observable to every observer, check the interface
        this.observersMap.forEach((v,k,m) => v.update(this)) 
    }

    public getName(): string {
        return this.name
    }

    //example of a possible method will have the notify method inside, note how we call it at the end to notify our observers
    //this is a simple change of name but it could be anything
    public changeName(name: string): void {

        console.log(`changing name from ${this.name} to ${name}..`)
        this.name = name

        console.log(`notifications being sent..`)
        this.notify()
    }
}

class webObserver implements Observer {

    name: string

    constructor(name: string) {
        this.name = name
    }
    update(observable: Subject): void {
        console.log(`${this.name} notification from ${observable.getName()}`)
    }
}

class phoneObserver implements Observer {

    name: string

    constructor(name: string) {
        this.name = name
    }
    update(observable: Subject): void {
        console.log(`${this.name} notification from ${observable.getName()}`)
    }
}

//init all our objects
const subject = new Subject('THANOS SERVICE')
const webObs = new webObserver('WEB')
const phoneObs = new phoneObserver('PHONE')

//make sure to subscribe/add the observers the observable
subject.add(webObs)
subject.add(phoneObs)

//notify all of our observers
subject.notify()

//now let's change the name
//this is just an example of a possible change of state inside the class, it could be a new item arrival for example or something else
subject.changeName('IRONMAN')