import axios from 'axios'
import React, { Component } from 'react';

const api = axios.create({
    baseURL:'https://localhost:44394/api/products/1' //this is a temp until we get by id.
  })
  
  
class ProductDetail extends Component {
    constructor(){
        super();
        this.state = {
        Products: [],
        }
    }
    componentDidMount(){
        this.getSingleProduct()
    }

    getSingleProduct = async ()  => {
        let data = await api.get('/').then(({ data }) => data)
        this.setState({ Products: data })
      }
render() {
return (
    <div>
        <table>
            <tbody>
                <tr><td>{this.state.Products.name}</td> 
                <td>{this.state.Products.description}</td> 
                <td>{this.state.Products.price}</td></tr> 
            </tbody>            
        </table>
    </div>
);
}
}

export default ProductDetail;