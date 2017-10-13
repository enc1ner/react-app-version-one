import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './productList';

describe('<ProductList />', () => {
    it('should render a list och products as an unordered list', () => {
        const mockProducts = [
            {id: 1, name: 'Mock Product 1', brand: 'MockBrand1'},
            {id: 2, name: 'Mock Product 2', brand: 'MockBrand2'},
            {id: 3, name: 'Mock Product 3', brand: 'MockBrand3'}
        ];
        
        const wrapper = shallow(<ProductList products={mockProducts} />);

        expect(wrapper.find('li').length).toEqual(mockProducts.length); //3
    });
});
