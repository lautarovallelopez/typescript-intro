export function whatMyType<T>(argument: T): T {
    return argument;
}

const amIString = whatMyType<string>('hola mundo');
const amINumber = whatMyType<number>(123);
const amIArray = whatMyType<number[]>([1, 2, 3, 4]);
