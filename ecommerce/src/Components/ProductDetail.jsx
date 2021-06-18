import axios from 'axios'
import React, { Component } from 'react';
  
  
class ProductDetail extends Component {
    constructor(){
        super();
        this.state = {
        Products: [],
        }
    }

componentDidMount(){
    const api = axios.create({
        baseURL:`https://localhost:44394/api/products/${this.props.key}`
      })
}
render() {
return (
    <div>
        <table>
            <tbody>
                <tr><td>{this.props.product.name}</td> 
                <td>{this.props.product.description}</td> 
                <td>{this.props.product.price}</td></tr> 
            </tbody>            
        </table>
    </div>
);
}
}

export default ProductDetail;