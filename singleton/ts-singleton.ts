class Singleton {
    //here's the best part, we use a static variable to store our singleton instance
    //and make it private so we can only get it through the getsingleton() method
    private static singleton: Singleton

    private constructor() {
        console.log('starting singleton..')
    }

    //call this method every time we want a singleton
    public static getSingleton(): Singleton {
        
        console.log('getting singleton..')
        //if the singleton instance (static singleton) is null we will initialize it
        if(!Singleton.singleton) {
            console.log('no singleton available')
            Singleton.singleton = new Singleton()
        }

        return Singleton.singleton
    }
}

function mainProgram() {
    //... code
    const singleton1 = Singleton.getSingleton()
    const singleton2 = Singleton.getSingleton()

    if(singleton1 === singleton2) {
        console.log('same instance')
    }

}
mainProgram()
