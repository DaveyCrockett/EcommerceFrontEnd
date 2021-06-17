import React, { Component } from 'react';

class Products extends Component {
    constructor(){
        super();
        this.state = {
        Products: [],
        }
    }
    
render() {
return (
    <div>
        <table>
            <tbody>
                {this.props.products.map(product => <tr><td>{product.name}</td><td>{product.description}</td><td>{product.price}</td></tr>)}  
            </tbody>            
        </table>
    </div>
);
}
}

export default Products;