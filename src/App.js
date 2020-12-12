import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import BookList from './component/BookList';
import Footer from './component/Footer';

class App extends Component {
  state = {
    list: [],
     books:[],
     format:'',
      loading: false 
  };
  this.setState({ books: [] });
  //API call
  async componentDidMount() {
    const nytApiCall = await fetch(
      'https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=ANvKA39bQWEgZrhr8AA0JZwGkElIDXXb',{Accept: 'application/json'},{'Content-Type': 'application/json'},{'method': 'GET'})
    .then((response) => response.json())
    // to see value of API in console
    .then((messages) => {console.log(messages.results);});
     this.setState({ list: nytApiCall })
  }

  render() {
    return (
      
      <div className="container">
        <Header format={this.state.format} />
        <List books={this.state.books} />
      </div>
    );
  }
}

export default App;
