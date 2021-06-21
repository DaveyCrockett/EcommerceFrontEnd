import './App.css';
import axios from 'axios'
import React, { Component } from 'react';
import ProductList from './Components/ProductsList';
import ProductDetail from './Components/ProductDetail';
import NavBar from './Components/NavBar';

const api = axios.create({
  baseURL:'https://localhost:44394/api/products/product'
})
const api2 = axios.create({
  baseURL:'https://localhost:44394/api/user/user'
})
const api3 = axios.create({
  baseURL: 'https://localhost:44394/api/authentication/login'
})
const api4 = axios.create({
  baseURL: 'https://localhost:44394/api/reviews/'
})
const token = localStorage.getItem('data')

class App extends Component {
  constructor(){
    super();
    this.state = {
      Products: [],
      CurrentUser: [],
      CurrentProduct:[],
      Reviews: [],
      SeeReviews: 'off'
    }
  }

  componentDidMount(){
    this.getProducts()
    this.getUser(token)
  }
  getProducts = async () => {
    let data = await api.get('/').then(({ data }) => data)
    this.setState({ Products : data })
  }
  getUser = async (token) => {
    let data = await api2.get('/', {headers:{"Authorization" : `Bearer ${token}`}}).then(({ data }) => data)
    this.setState({ CurrentUser : data })
  }
  SignInUser = async (event) => {
    event.preventDefault()
    let res = await api3.post('/',{username:event.target.username.value,
    password:event.target.password.value,})
    localStorage.setItem('data', res.data.token)
    this.getUser(token)
    window.location.reload()
  }
  getReviews = async (p) => {
    let data = await api4.get(`${p}`).then(({ data }) => data)
    this.setState({Reviews : data})
  } 
  handleProductSelect = (product) => {
    this.setState({CurrentProduct : product})
    let p = product.id
    this.getReviews(p)
    this.setState({SeeReviews: 'on'})
  }
render() {
  if (this.state.CurrentUser.length === 0)
    return(
      <div>
        <NavBar />
      
        <div className="login-container text-c animated flipInX">
              <div>
                  <h1 className="logo-badge text-whitesmoke"><span className="fa fa-user-circle"></span></h1>
              </div>
                 <h3 className="text-whitesmoke">Sign In Template</h3>
                  <p className="text-whitesmoke">Sign In</p>
              <div className="container-content">
                  <form className="margin-t" onSubmit={(event) => this.SignInUser(event)}>
                     <div className="form-group">
                          <input type="text" class="form-control"  name="username" placeholder="Username" required=""/>
                      </div>
                      <div className="form-group">
                          <input type="password" class="form-control" name="password" placeholder="*****" required=""/>
                      </div>
                      <button type="submit" class="form-button button-l margin-b">Sign In</button>
                  </form>
              </div>
          </div>
        </div>
    )
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <h1>Hello World!</h1>
        </header>
        <h2>Product List</h2>
        <ProductList products={this.state.Products} CurrentProduct={this.state.CurrentProduct} handleProductSelect ={this.handleProductSelect} reviews = {this.state.Reviews}handlereview = {this.handleReviewSelect} seeReviews={this.state.seeReviews}/>
      </div>
    );
  
  
}
}

export default App;
