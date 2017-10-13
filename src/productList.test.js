import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './productList';


describe('<ProductList />', () => {
    let mockProducts, wrapper;
    
    beforeEach(() => {
        mockProducts = GetMockProducts(mockProducts);
        
        wrapper = shallow(<ProductList products={mockProducts} />);
    });
    
    it('should render a list och products as an unordered list', () => {
        expect(wrapper.find('li').length).toEqual(mockProducts.length); //3 
    });

    it('should display the product name in each <li> element', () => {
        const firstElement = wrapper.find('li').first();

        expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
    });
    

    it('should display the brand name in each <li> element', () => {
        const firstElement = wrapper.find('li').first();
        
        expect(firstElement.contains(mockProducts[0].brand)).toEqual(true);
    });
        
    
});
function GetMockProducts(mockProducts) {
    mockProducts = [
        { id: 1, name: 'Mock Product 1', brand: 'MockBrand1' },
        { id: 2, name: 'Mock Product 2', brand: 'MockBrand2' },
        { id: 3, name: 'Mock Product 3', brand: 'MockBrand3' }
    ];
    return mockProducts;
}

