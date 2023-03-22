import { Product } from '../../types';
import { productComparator } from '../productComparator';

describe('test productComparator function', () => {
    const products: Product[] = [
        {
            id: 1,
            name: 'string',
            description: 'string',
            price: 1000,
            priceSymbol: '$',
            category: 'Электроника',
        },
        {
            id: 2,
            name: 'string',
            description: 'string',
            price: 200,
            priceSymbol: '$',
            category: 'Электроника',
        },
    ];

    describe('test default sort', () => {
        it('return 0 if sortBy по умолчанию', () => {
            expect(productComparator('по умолчанию')(products[0], products[1])).toBe(0);
        });
    });

    describe('test increasing sort', () => {
        it('return 1 if sortBy по возрастанию цены and 1 product > 2 product ', () => {
            expect(productComparator('по возрастанию цены')(products[0], products[1])).toBe(1);
        });

        it('return -1 if sortBy по возрастанию цены цены and 2 product > 1 product ', () => {
            expect(productComparator('по возрастанию цены')(products[1], products[0])).toBe(-1);
        });
    });

    describe('test descending sort', () => {
        it('return 0 if first price equal second price', () => {
            expect(productComparator('по убыванию цены')(products[0], products[0])).toBe(0);
        });

        it('return 1 if sortBy по убыванию цены and 2 product > 1 product ', () => {
            expect(productComparator('по убыванию цены')(products[1], products[0])).toBe(1);
        });

        it('return -1 if sortBy по убыванию цены and 1 product > 2 product ', () => {
            expect(productComparator('по убыванию цены')(products[0], products[1])).toBe(-1);
        });
    });
});
