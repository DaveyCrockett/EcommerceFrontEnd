import './App.css';
import axios from 'axios'
import React, { Component } from 'react';
import ProductList from './Components/ProductsList';
import ProductDetail from './Components/ProductDetail';

const api = axios.create({
  baseURL:'https://localhost:44394/api/products/product'
})
const api2 = axios.create({
  baseURL:'https://localhost:44394/api/user/user'
})

const token = 'c275b4e7-8674-4246-b49f-9a5b0ca7d83b'

class App extends Component {
  constructor(){
    super();
    this.state = {
      Products: [],
      CurrentUser: [],
    }
  }
  componentDidMount(){
    this.getProducts()
    this.getUser(token)
  }
  getProducts = async () => {
    let data = await api.get('/').then(({ data }) => data)
    this.setState({ Products : data })
    console.log(this.state.Products)
  }
  getUser = async (token) => {
    let data = await api2.get('/', {headers:{"Authorization" : `Bearer ${token}`}}).then(({ data }) => data)
    this.setState({ CurrentUser : data })
    console.log(this.state.CurrentUser)
  }

render() {
  if (!this.state.CurrentUser){
    return(
      <h3>hello not signed in person</h3>
    )
  }
  
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
      <h2>Product List</h2>
      <ProductList products={this.state.Products}/>
      {console.log(this.state.Products)}
      <h2>Product Detail</h2>
      {this.state.Products.map((product) => {
      return(
        <ProductDetail key={product.id} product={product}/>
      )
    })}
    </div>
  );
}
}

export default App;
