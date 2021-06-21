import React from 'react';
import ProductDetail from './ProductDetail';


function ProductsList(props) {
 
return (
    <div>
        <table>
            <thead>
                
            </thead>
            <tbody>
                
                {props.products.map(product => <ProductDetail key={product.id} id={product.id} name = {product.name} description = {product.description} price = {product.price}/>)}
            </tbody>            
        </table>
    </div>
                )
                }

export default ProductsList;