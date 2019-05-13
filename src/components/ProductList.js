import React, { Component } from 'react'
import Product from './Product'
import products from "./seed";

class ProductList extends Component {
    render() {
        const sortedProducts = products.sort((a, b) => (
            b.votes - a.votes
        ))

        const productList = sortedProducts.map(product => (
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submittedAvatarUrl={product.submittedAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
            )
        )

        return (
            <div className="ui unstackable items">
                {productList}
            </div>
        )
    }
}

export default ProductList