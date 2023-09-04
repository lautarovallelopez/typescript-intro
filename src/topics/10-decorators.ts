function classDecorator<T extends { new (...args: any[]) : {}}>(constructor: T) {
    return class extends constructor {
        newProperty = 'new york';
        hello = 'override';
    }
}

@classDecorator
class SuperClass {
    public myProperty: string = '123';
    public habitacion: string;
    constructor() {
        this.habitacion = 'saa';
    }
    print() {
        console.log(this.myProperty);
    }
}

console.log(SuperClass);

const myclass = new SuperClass();
console.log(myclass);
