import { Product, taxCalculation } from './06-functions-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'ipad',
        price: 250
    }
];

const [total, taxTotal] = taxCalculation({ products: shoppingCart, tax: 0.15 });


