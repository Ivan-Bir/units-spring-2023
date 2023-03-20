import { Product } from '../../types';
import { applyCategories } from '../applyCategories';

describe('test applyCategories function', () => {
    let products: Product[];
    beforeAll(() => {
        products = [
            {
                id: 1,
                name: 'string',
                description: 'string',
                price: 300,
                priceSymbol: '$',
                category: 'Электроника',
            },
            {
                id: 2,
                name: 'string',
                description: 'string',
                price: 400,
                priceSymbol: '$',
                category: 'Для дома',
            },
            {
                id: 3,
                name: 'string',
                description: 'string',
                price: 500,
                priceSymbol: '$',
                category: 'Одежда',
            },
        ];
    });

    it('should return products if categories empty', () => {
        expect(applyCategories(products, [])).toEqual(products);
    });

    it('should return products applied categories', () => {
        expect(applyCategories(products, ['Одежда'])).toEqual([products[2]]);
    });

    it('should return products for all categories', () => {
        expect(applyCategories(products, ['Для дома', 'Электроника', 'Одежда'])).toEqual([...products]);
    });

    it('should return products applied multiple categories', () => {
        expect(applyCategories(products, ['Одежда', 'Для дома'])).toEqual([products[1], products[2]]);
    });
});
