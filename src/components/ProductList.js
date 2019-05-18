import React, { Component } from 'react'
import Product from './Product'
import products from "./seed";

class ProductList extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.setState({
            products: products
        })
    }

    handleProductUpVote = (productId) => {
        const updatedProducts = this.state.products.map(product => {
            if (product.id === productId) {
                return {
                    ...product, votes: product.votes + 1
                }
            } else {
                return product
            }
        })

        this.setState({
            products: updatedProducts
        })
    }

    render() {
        const sortedProducts = this.state.products.sort((a, b) => (
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
                    onVote = {this.handleProductUpVote.bind(this)}
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