import React, { Component } from 'react';
import { FilterableProductTable } from './FilterableProductTable'
import ProductList from './ProductList'
import logo from './logo.svg';
import './App.css';

constructor(props) {
  super(props);
  this.state = {
    products: [
      {id: 1, name: 'AirMax 90', brand: 'Nike'},
      {id: 2, name: 'Yeezy', brand: 'Adidas'},
      {id: 3, name: 'Classic', brand: 'Reebok'},
    ]
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Product Store</h1>
        <ProductList products={PRODUCTS} />  
      </div>
    );
  }
}
 

export default App;
