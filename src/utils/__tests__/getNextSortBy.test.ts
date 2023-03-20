import { getNextSortBy } from '../getNextSortBy';
import type { SortBy } from '../../types';

describe('test applyCategories function', () => {
    test.each([
        ['по умолчанию', 'по возрастанию цены'],
        ['по возрастанию цены', 'по убыванию цены'],
        ['по убыванию цены', 'по умолчанию'],
    ] as [SortBy, SortBy][])('test applyCategories function', (category, expected) =>
        expect(getNextSortBy(category)).toBe(expected)
    );
});
