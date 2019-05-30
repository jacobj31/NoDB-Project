import React, {Component} from 'react'

export default class Book extends Component{
    constructor(props){
        super(props)

        this.state= {
            bookview : false
        }
    }


    render(){
        let {book} = this.props
        return(
        <div style={{height: '100px', width: '100px', border: '1px solid white', background: book.cover}}>
               {book.title}
               {book.author}
        </div>)
    }
}
