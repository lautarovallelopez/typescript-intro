/*
export class Person {
    public name: string;
    public address: string;

    constructor() {
        this.name = 'tony';
        this.address = 'new york';
    }
}

const ironman = new Person();
*/

export class Person {
    constructor(public name: string, public address: string) {}
}
/*
export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public address: string
    ){
        super(realName, address);
    }
}

const ironman = new Hero('ironman', 45, 'tony', 'new york')
*/

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public person: Person
    ) {}
}

const tony = new Person('tony', 'new york');
const ironman = new Hero('ironman', 45, tony);

console.log(ironman);