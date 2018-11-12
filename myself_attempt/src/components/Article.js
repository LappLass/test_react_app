import React, { Component } from 'react';


class Article extends Component {
    state = {
      visible: false,
    }
    readMoreClick = (e) => {
      e.preventDefault()
      this.setState(prevState => { 
          return {
        visible: !this.state.visible
         }
      })
    }
    render() { 
      const { author, text, bigText } = this.props.data
      const { visible } = this.state
      return(
        <div className="article" >
        <p className="news_author">{author}:</p>
        <p className="news_text">{text}</p>
        {
          !visible && <a href="#1" onClick={this.readMoreClick} className="news_readmore">more</a>
        }
        {
          visible &&  
          <React.Fragment>
          <p className="news_big_text" >{bigText}</p> 
          <span className="arrow-top" onClick={this.readMoreClick} />
          </React.Fragment>
        }
        
        </div>
      )
  
    }
  }

  export default Article;