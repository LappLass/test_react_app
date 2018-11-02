import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const myNews = [
  {
    id: 1,
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
    id: 2,
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
    },
    {
    id: 3,
    author: 'Max Frontend',
    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
    bigText: 'А евро опять выше 70.'
    },
    {
    id: 4,
    author: 'Гость',
    text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru',
    bigText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
    }
  ];

const App = () => {
  return (
    <React.Fragment>
    <h1>News</h1>
    <News  data={myNews}/>
    </React.Fragment>
  )
}
class Article extends React.Component {
  state = {
    visible: false,
  }
  readMoreClick = (e) => {
    e.preventDefault()
    this.setState( {visible: !this.state.visible })
  }
  render() { 
    const { author, text, bigText } = this.props.data
    const { visible } = this.state
    return(
      <div className="article" >
      <p className="news_author">{author}:</p>
      <p className="news_text">{text}</p>
      {
        !visible && <a href="#" onClick={this.readMoreClick} className="news_readmore">more</a>
      }
      {
        visible &&  <p className="news_text" onClick={this.readMoreClick}>{bigText}</p>
      }
      
      </div>
    )

  }
}
class News extends React.Component {
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



export default App;
