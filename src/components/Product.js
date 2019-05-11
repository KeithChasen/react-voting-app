import React, { Component } from 'react'

class Product extends Component {
    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={require('./images/product.png')} alt=""/>
                </div>
                <div className="middle aligned content">
                    <div className="description">
                        <a>Product 1</a>
                        <p>Product description</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img
                            src={require("./images/face.png")}
                            className="ui avatar image"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product