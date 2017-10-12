import React from 'react';
import { shallow } from 'enzyme';
import { FilterableProductTable } from './FilterableProductTable';
import { ProductTable }from './ProductTable';

describe('<FilterableProductTable', () => {
    it('renders without crashing', () => {
        var wrapper = shallow(<FilterableProductTable />);
    });

    it('contains a ProductTable', () => {
        var wrapper = shallow(<FilterableProductTable />);
        var products = [];
        var productTable = shallow(<ProductTable products={products} />);
        expect(wrapper.find(productTable)).toHave.length(1);
    });
});
