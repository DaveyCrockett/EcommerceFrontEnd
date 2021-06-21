import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({product, handleProductSelect}) => {
    return (
        <tr className = 'Product-item'>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td className="price">${product.price}</td>
            <td><button className='review-button' onClick={() => handleProductSelect(product)}>See More</button></td>
        </tr>
    )
}

export default ProductDetail;