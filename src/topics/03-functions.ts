function addNumbers(a: number, b: number): number {
    return a + b;
}

const result: number = addNumbers(3, 5);

const numberArrow = (a: number, b: number): number => {
    return a + b;
}

const multiply = (firstNumber: number, secondNumber?: number, base: number = 2): number => {
    return firstNumber * base;
}

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 5,
    showHp() {
        console.log(this.hp);
    }
}

healCharacter(strider, 10);

strider.showHp();

export {};