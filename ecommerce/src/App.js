import './App.css';
import axios from 'axios'
import React, { Component } from 'react';

const api = axios.create({
  baseURL:'https://localhost:44394/api/products/product'
})
class App extends React.Component {
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
    console.log(this.state.Products)
  }
render() {
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
