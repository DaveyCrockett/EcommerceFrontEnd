import axios from 'axios'
import React, { Component } from 'react';
  
const api = axios.create({
    baseURL:'https://localhost:44394/api/products/product'
  })

class Products extends Component {
    constructor(){
        super();
        this.state = {
        Products: [],
        }
    }
    componentDidMount(){
        this.getProducts()
    }
    getProducts = async () => {
        let data = await api.get('/').then(({ data }) => data)
        this.setState({ Products : data })
      }
    
render() {
return (
    <div>
        <table>
            <tbody>
                {this.state.Products.map(product => <tr><td>{product.name}</td><td>{product.description}</td><td>{product.price}</td></tr>)}  
            </tbody>            
        </table>
    </div>
);
}
}

export default Products;