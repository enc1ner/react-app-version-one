import React, { Component } from 'react';
import { ProductTable } from './ProductTable';
export class FilterableProductTable extends Component {
    render() {
        return (
            <div>
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}