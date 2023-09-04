export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'lautaro'
};

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Rodrigo']
};

const printChildren = (passenger: Passenger) => {
    const howManyChildren: number = passenger.children?.length || 0;

    console.log(howManyChildren);
};

printChildren(passenger1);
