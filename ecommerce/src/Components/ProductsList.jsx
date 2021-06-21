import React from 'react';
import ProductDetail from './ProductDetail';
import './ProductList.css'
import Reviews from './Review';

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
                        
                    <div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
			
					<div className="details col-md-6">
						<h3 className="product-title">{CurrentProduct.name}</h3>
						<p className="product-description">{CurrentProduct.description}</p>
						<h4 className="price">current price: <span>${CurrentProduct.price}</span></h4>
						<h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">s</span>
							<span className="size" data-toggle="tooltip" title="medium">m</span>
							<span className="size" data-toggle="tooltip" title="large">l</span>
							<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span className="color green"></span>
							<span className="color blue"></span>
						</h5>
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button">add to cart</button>
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

