import React, {Component} from 'react'
import Bookview from './EditBookView'

export default class Book extends Component{
    constructor(props){
        super(props)

        this.state= {
            bookview : false
        }
    }

    toggleBookView = () => {
        this.setState({bookview: !this.state.bookview})
    }


    render(){
        let {book} = this.props
        return(
        <div 
        style={{height: '300px', width: '100px', border: '1px solid white', background: book.cover}}>
               {book.title}
               {book.author}

        {this.state.bookview?
        <Bookview
        book = {book}
        edit = {this.props.editBook}
        toggle = {this.toggleBookView}/>
        : <div></div>
    
        }
        <button onClick={this.props.delete}>Delete</button>
        <button onClick = {this.toggleBookView}></button>
        </div>)
    }
}
