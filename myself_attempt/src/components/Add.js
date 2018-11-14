import React, { Component } from 'react';


class Add extends Component {
    state = {
     author: '',
     text: '',
     bigText: '',
     agree: false
    }

    componentDidMount() {
      this.setState({ author: '',
                      text: '',
                      bigText: ''
                    })
    }
    
     render() {
       const { author, text, bigText } = this.state
       return (
         <form className='add' >
           <input 
             id="author"
             type='text'
             className="add__author"  
             placeholder='Ваше имя'
             value={ author }
             onChange={this.handleChange}
           />
           <textarea
             id="text"
             className='add__text'
             placeholder='Тема новости'
             value={ text }
             onChange={this.handleChange}
           ></textarea>
           <textarea
             id="bigText"
             className='add__text'
             placeholder='Текст новости'
             value={ bigText }
             onChange={this.handleChange}
           ></textarea>
           <label className='add__checkrule' >
             <input type='checkbox' onChange={this.handlerAgree} /> Я согласен с правилами
           </label>
           <button 
             className='add__btn'
             onClick={ this.handlerShowAlert }
             disabled={this.validate()}>
             add news
           </button>
         </form>
       
       )
     }
     validate = () => {
       const { author, text, agree, bigText } = this.state
       if (author.trim().length && text.trim().length && bigText.trim().length && agree) {
         return false
       }
         return true
     }
     handlerAgree = (e) => {
       this.setState({ agree: e.currentTarget.checked})
     }
     handleChange = (e) => {
       e.preventDefault()
       const { id, value } = e.currentTarget
       this.setState({ [id]: value})
     }
   
     handlerShowAlert = (e) => {
       e.preventDefault()
       const { author, text, bigText } = this.state
       this.props.onAddNews( {
         author,
         text, 
         bigText, 
         id: +new Date()
       })
      this.setState({text:'', 
                     bigText: ''})
     }
   }

   export default Add;