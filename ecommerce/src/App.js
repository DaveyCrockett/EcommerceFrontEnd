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
const api5 = axios.create({
  baseURL: 'https://localhost:44394/api/ratings/'
})
const api6 = axios.create({
  baseURL: 'https://localhost:44394/api/shoppingcart'
})
const api7 = axios.create({
  baseURL: 'https://localhost:44394/api/authentication'
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
      SeeReviews: 'off',
      Ratings: [],
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
  SignUpUser = async (event) => {
    event.preventDefault()
    let res = await api7.post('/',{firstname:event.target.firstname.value,
    lastname:event.target.lastname.value,
    username:event.target.username.value,
    password:event.target.password.value,
    email:event.target.email.value,
    phonenumber:event.target.phonenumber.value,
  })
    localStorage.setItem('data', res.data.token)
    this.getUser(token)
    window.location.reload()
  }
  getReviews = async (p) => {
    let data = await api4.get(`${p}`).then(({ data }) => data)
    this.setState({Reviews : data})
  }
  getRating = async (p) => {
    let data = await api5.get(`${p}`).then(({ data }) => data)
    this.setState({Ratings : data})
  }
  addToShoppingCart = async () => {
    let res = await api6.post(`/${this.state.CurrentUser.id}/${this.state.CurrentProduct.id}/`,
    {UserId:this.state.CurrentUser.id,
    ProductId:this.state.CurrentProduct.id,
    Quantity: 1})
    console.log(res)
  }
  handleBuy = (CurrentProduct) => {
    alert(`adding ${CurrentProduct.name} to ${this.state.CurrentUser.id} cart`)
    this.addToShoppingCart()
  }  
  handleProductSelect = (product) => {
    this.setState({CurrentProduct : product})
    let p = product.id
    this.getReviews(p)
    this.getRating(p)
    this.setState({SeeReviews: 'on'})
  }
render() {
  if (this.state.CurrentUser.length === 0)
    return(
      <div>
        <head>
      </head>
      <NavBar/>
      <form className='StackForm' onSubmit = {(event) => this.SignInUser(event)}>
      <h3>Sign in:</h3>
    <label htmlfor="username">Username: </label>
    <input type = "text" id="username" name="username"/><br/>
    <label htmlfor="password">Password: </label>
    <input type = "text" id="password" name="password"/><br/>
      <button type="submit">Submit</button>
      </form>
      <p>Not registered? Sign up!</p>
      <form className='StackForm' onSubmit = {(event) => this.SignUpUser(event)}>
      <h3>Sign up:</h3>
    <label htmlfor="firstname">First name: </label>
    <input type = "text" id="firstname" name="firstname"/><br/>
    <label htmlfor="lastname">Last Name: </label>
    <input type = "text" id="lastname" name="lastname"/><br/>
    <label htmlfor="username">Username: </label>
    <input type = "text" id="username" name="username"/><br/>
    <label htmlfor="password">Password: </label>
    <input type = "text" id="password" name="password"/><br/>
    <label htmlfor="email">email@somewhere.com: </label>
    <input type = "text" id="email" name="email"/><br/>
    <label htmlfor="phonenumber">Phone Number </label>
    <input type = "text" id="phonenumber" name="phonenumber"/><br/>
      <button type="submit">Submit</button>
      </form>
      </div>
      
    //  <form className='StackForm' onSubmit = {(event) => this.SignInUser(event)}>
    //   <div className="login-container text-c animated flipInX">
    //         <div>
    //             <h1 className="logo-badge text-whitesmoke"><span className="fa fa-user-circle"></span></h1>
    //         </div>
    //             <h3 className="text-whitesmoke">Sign In Template</h3>
    //             <p className="text-whitesmoke">Sign In</p>
    //         <div className="container-content">
    //             <form className="margin-t">
    //                 <div className="form-group">
    //                     <input type="text" htmlfor='username'name="username"class="form-control" placeholder="Username" required=""/>
    //                 </div>
    //                 <div className="form-group">
    //                     <input type="password" htmlfor='password' name="password"class="form-control" placeholder="*****" required=""/>
    //                 </div>
    //                 <button type="submit" class="form-button button-l margin-b">Sign In</button>
    //             </form>
    //         </div>
    //     </div>
    //   </form>
        
    )
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <h1>Hello World!</h1>
        </header>
        <h2>Product List</h2>
        <ProductList products={this.state.Products} CurrentProduct={this.state.CurrentProduct} handleProductSelect ={this.handleProductSelect} reviews = {this.state.Reviews}handlereview = {this.handleReviewSelect} seeReviews={this.state.seeReviews} handleBuy={this.handleBuy}/>
      </div>
    );
  
  
}
}

export default App;
