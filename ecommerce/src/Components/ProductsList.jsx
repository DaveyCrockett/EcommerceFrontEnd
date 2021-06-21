import React from 'react';
import ProductDetail from './ProductDetail';
import './ProductList.css'
import Reviews from './Review';
import Rate from './Rating';

const ProductList = ({products, handleProductSelect, CurrentProduct, reviews, seeReviews}) => {
    let renderedProducts = products.map((product) => {
        return(
            <ProductDetail key={product.id} product={product} handleProductSelect ={handleProductSelect}/>
            )});
        if(CurrentProduct.length === 0){
        return <table className='product-table'>{renderedProducts}</table>
        }
        return (
                <body>
                        
                    <div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
			
					<div class="details col-md-6">
						<h3 class="product-title">{CurrentProduct.name}</h3>
						<p class="product-description">{CurrentProduct.description}</p>
						<h4 class="price">current price: <span>${CurrentProduct.price}</span></h4>
						<h5 class="sizes">sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 class="colors">colors:
							<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span class="color green"></span>
							<span class="color blue"></span>
						</h5>
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">add to cart</button>
							<Rate product={product}/>
                            <Reviews reviews = {reviews} seeReviews={seeReviews}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
                </body>
            )
}
export default ProductList;

