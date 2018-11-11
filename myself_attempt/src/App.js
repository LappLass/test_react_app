import React, { Component } from 'react';
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
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    bigText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corporis nobis optio molestias aspernatur repellat suscipit tenetur maiores quas sed.'
    }
  ];

const App = () => {
  return (
    <React.Fragment>
    <Add />
    <h1>News</h1>
    <News  data={myNews}/>
    </React.Fragment>
  )
}
class Add extends React.Component {
 state = {
  author: '',
  message: '',
  accept: false
 }
  render() {
    const { author, message,accept } = this.state
    return (
      <form className='add'>
        <input 
          type='text'
          className="add__author"  
          placeholder='Ваше имя'
          value={ author }
          onChange={this.handleChangeAuthor}
        />
        <textarea
          className='add__text'
          placeholder='Текст новости'
          value={ message }
          onChange={this.handleChangeMessage}
        ></textarea>
        <label className='add__checkrule' >
          <input type='checkbox' onChange={this.handlerAccept}/> Я согласен с правилами
        </label>
        <button 
          className='add__btn'
          onClick={ this.handlerShowAlert }
          disabled={!accept}>
          show alert
        </button>
      </form>
    
    )
  }
  handlerAccept = (e) => {
    this.setState({ accept: e.currentTarget.checked})
  }
  handleChangeAuthor = (e) => {
    e.preventDefault()
    this.setState({ author: e.currentTarget.value})
  }
  handleChangeMessage = (e) => {
    e.preventDefault()
    this.setState({ message: e.currentTarget.value})
  }
  handlerShowAlert = (e) => {
    e.preventDefault()

  }
}
class Article extends React.Component {
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
        !visible && <a href="#" onClick={this.readMoreClick} className="news_readmore">more</a>
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
