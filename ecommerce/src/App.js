import './App.css';
import axios from 'axios'
import React, { Component } from 'react';

const api = axios.create({
  baseURL:'https://localhost:44394/api/products/product'
})
const api2 = axios.create({
  baseURL:'https://localhost:44394/api/user/user'
})
const api3 = axios.create({
  baseURL:'https://localhost:44394/api/authentication'
})
const token = 

class App extends React.Component {
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
  if (!this.state.Currentuser){
    return(
      <h3>hello not signed in person</h3>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
    </div>
  );
}
}

export default App;
