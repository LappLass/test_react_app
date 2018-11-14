import React, { Component } from 'react';
import Add from './components/Add';
import News from './components/News';

import './App.css';

class App extends Component {
  state = {
    news: null,
    isLoading: false
  }
  static getDerivedStateFromProps(props, state) {
    let filterNews
    if (Array.isArray(state.news)) {
      filterNews = [ ...state.news ]

      filterNews.forEach( ( item ) => {
        if ( item.bigText.toLowerCase().indexOf('pubg') !== -1 ){
          item.bigText = 'SPAM'
        }
      })
      return {
        news: filterNews
      }
    }
    return null
  }
  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('http://localhost:3000/data/newsData.json')
      .then( response => {
        return response.json()
      })
      .then( data => {
        setTimeout( () =>{
          this.setState({ isLoading: false,
                          news: data})
        }, 1500)
      })
  }

  handleAddNews = (data) => {
    const nextNews = [data, ...this.state.news]
    this.setState({ news: nextNews })
  }
  render() {
    const { news, isLoading } = this.state

    return( 
    <React.Fragment>
      <Add onAddNews={this.handleAddNews}/>
      <h1>News</h1>
      { isLoading && <p>Loading...</p>}
      { Array.isArray(news) && <News data={news} />}
    </React.Fragment>
    )
  }
}


export default App;
