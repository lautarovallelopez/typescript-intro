export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    products: Product[];
    tax: number;
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { products, tax } = options;
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
};

const tablet: Product = {
    description: 'Ipad',
    price: 250
};

const shoppingCart: Product[] = [tablet, phone];
const tax: number = 0.15;

const [total, taxTotal] = taxCalculation({ products: shoppingCart, tax });

console.log(total, taxTotal);

export {};