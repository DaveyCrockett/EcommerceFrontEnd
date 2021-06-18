import axios from 'axios'
import React, { Component } from 'react';
import Rating from './Rating'

const api = axios.create({
    baseURL:`https://localhost:44394/api/products`
  })
  
class ProductDetail extends Component {
    constructor(){
        super();
        this.state = {
        Products: [],
        }
    }
    getOneProduct = async () => {
        
        let data = await api.get(`/${this.props.id}`).then(({ data }) => data)
        this.setState({ Products : data })
        }

    componentDidMount(){
        this.getOneProduct()
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
            <Rating />
        </div>
    );
}
}

export default ProductDetail;