import React, { Component } from 'react';
import './ProductDetail.css';

const ProductDetail = ({product, handleProductSelect}) => {
    return (
        <tr className = 'Product-item'>
            {product.name}
            <br></br>
            {product.description}
            <br></br>
            {product.price}
            <br></br>
            <button className='review-button' onClick={() => handleProductSelect(product)}>See More</button>
            <br></br>
        </tr>
    )
}

export default ProductDetail;