import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import './ProductList.css'

const ProductList = ({products, handleProductSelect, CurrentProduct, reviews}) => {
    let renderedProducts = products.map((product) => {
        return(
            <ProductDetail key={product.id} product={product} handleProductSelect ={handleProductSelect}/>
            )});
        if(CurrentProduct.length === 0){
        return <table className='product-table'>{renderedProducts}</table>
        }
        return (
                <body>
                    <section className= 'product'>
                    <header className= 'productheader'>{CurrentProduct.name}</header>
                    <p className='itemdesc'>{CurrentProduct.description}</p>
                    <h5 className = 'price'>${CurrentProduct.price}</h5>
                    <button>Add To Cart</button><button>See Reviews</button>
                    </section>
                </body>
            )
}
export default ProductList;