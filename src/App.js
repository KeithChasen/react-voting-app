import React from 'react';
import ProductList from './components/ProductList'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App main ui text container">
        <h1 className="ui dividing centered header">Popular Products</h1>
        <div id="content">
            <ProductList />
        </div>
    </div>
  );
}

export default App;
