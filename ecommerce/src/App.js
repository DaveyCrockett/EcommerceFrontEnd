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
const api3 = axios.create({
  baseURL: 'https://localhost:44394/api/authentication/login'
})
const token = localStorage.getItem('data')

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
<<<<<<< HEAD
  SignInUser = async (event) => {
    event.preventDefault()
    let res = await api3.post('/',{username:event.target.username.value,
    password:event.target.password.value,})
    localStorage.setItem('data', res.data.token)
    this.getUser(token)
    window.location.reload()
  }
=======

>>>>>>> de4117a03fa56363332d675042706dc67e1bfc08
render() {
  if (this.state.CurrentUser == 0)
    return(
      <form className='StackForm' onSubmit = {(event) => this.SignInUser(event)}>
      <h3>Sign in:</h3>
    <label htmlfor="username">Username: </label>
    <input type = "text" id="username" name="username"/><br/>
    <label htmlfor="password">Password: </label>
    <input type = "text" id="password" name="password"/><br/>
      <button type="submit">Submit</button>
    </form>
    )
<<<<<<< HEAD
  
=======
  }
  
  

>>>>>>> de4117a03fa56363332d675042706dc67e1bfc08
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
<<<<<<< HEAD
      {/* <ProductList Products={this.state.Products}/> */}
=======
      <h2>Product List</h2>
      <ProductList products={this.state.Products}/>
      {console.log(this.state.Products)}
      <h2>Product Detail</h2>
      {this.state.Products.map((product) => {
      return(
        <ProductDetail key={product.id} product={product}/>
      )
    })}
>>>>>>> de4117a03fa56363332d675042706dc67e1bfc08
    </div>
  );
}
}

export default App;
