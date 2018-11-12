import React, { Component } from 'react';
import Article from './Article';


class News extends Component {
    renderNews = () => {
      const { data } = this.props
      let newsTemplate;
      
      if ( data.length ) {
        newsTemplate = data.map(function( item ){
          return ( <Article key = {item.id} data={item} />)
        })
      } else {
          newsTemplate = <p>not news</p>
      }
      return newsTemplate
    }
  
    render() {
      const { data } = this.props
      return (
        <div className="news">
          { this.renderNews() }
          { data.length ? <strong >All News: {data.length}</strong>: null }
        </div>
      )
    }
  
  }

  export default News;