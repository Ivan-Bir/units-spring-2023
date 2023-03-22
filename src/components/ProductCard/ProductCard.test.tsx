import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';
import { getPrice } from '../../utils';

jest.mock('../../utils/getPrice', () => ({
    __esModule: true,
    getPrice: jest.fn(() => '300 $'),
}));

afterEach(jest.clearAllMocks);

describe('ProductCard test', () => {
    let product: Product;
    beforeEach(() => {
        product = {
            id: 1,
            name: 'Easy',
            description: 'Easy test',
            price: 300,
            priceSymbol: '$',
            category: 'Для дома',
            imgUrl: '/iphone.png',
        };
    });

    it('should render correctly with img', () => {
        const rendered = render(<ProductCard {...product} />);

        expect(rendered.asFragment()).toMatchSnapshot();
        expect(rendered.baseElement.querySelector('.product-card__image')).toBeDefined();
    });

    it('should render correctly without img', () => {
        const productPropsWithoutImgUrl: Product = {
            ...product,
        };
        delete productPropsWithoutImgUrl.imgUrl;

        const rendered = render(<ProductCard {...productPropsWithoutImgUrl} />);

        expect(rendered.baseElement.querySelector('.product-card__image')).toBeNull();
    });

    it('getPrice called once', () => {
        render(<ProductCard {...product} />);

        expect(getPrice).toBeCalledTimes(1);
    });
});
