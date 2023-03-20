import { Category } from '../../types';
import { updateCategories } from '../updateCategories';

describe('test updateCategories function', () => {
    const categories: Category[] = ['Для дома', 'Одежда', 'Электроника'];

    it('return categories without changed category', () => {
        expect(updateCategories(categories, 'Для дома')).toEqual([
            'Одежда',
            'Электроника',
        ]);
    });

    it('return categories with new changedCategory', () => {
        expect(updateCategories(['Для дома', 'Одежда'], 'Электроника')).toEqual(
            categories
        );
    });
});
