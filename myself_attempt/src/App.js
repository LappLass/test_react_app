import React, { Component } from 'react';
import Add from './components/Add';
import News from './components/News';
import newsData from './data/newsData';
import './App.css';

class App extends Component {
  state = {
    news: newsData
  }

  handleAddNews = (data) => {
    const nextNews = [data, ...this.state.news]
    this.setState({ news: nextNews })
  }
  render() {
    return( 
    <React.Fragment>
      <Add onAddNews={this.handleAddNews}/>
      <h1>News</h1>
      <News data={ this.state.news }/>
    </React.Fragment>
    )
  }
}


export default App;
