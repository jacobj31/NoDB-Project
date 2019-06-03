import React, {Component} from 'react'
import Bookview from './EditBookView'

export default class Book extends Component{
    constructor(props){
        super(props)

        this.state = {
            bookview: false,
            editview: false
        }
    }

    handleMouse = () => {
        if(this.props.edit === false){
        this.setState({bookview: !this.state.bookview})
        }
        }
    
    getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return (Math.floor(Math.random() * (max - min)) + min) + 'px'; 
          }
    
        

    render(){
        let {book} = this.props
        
        return(
        <div className = 'book'  
        style = {{background: book.cover, color: book.text, height: book.height}}
        onClick = {this.props.toggle}
        onMouseOver = {this.handleMouse}  
        onMouseOut = {this.handleMouse}  
        >
        
               <h1 className = 'title'>{book.title}</h1>

        {this.state.bookview?
        <Bookview
        book = {book}
        edit = {this.props.editBook}
        toggle = {this.props.toggle}
        delete = {this.props.delete}/>
        : undefined
        }
        
        </div>)
    }
}
