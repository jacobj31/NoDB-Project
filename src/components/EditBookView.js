import React, {Component} from 'react'

export default class Form extends Component{
    constructor(props){
        super(props)

        let {title, author, cover, text} = props.book
        this.state ={
            title,
            author,
            cover,
            text      
        }
    }

    handleChange = e => {
        let {value, name} = e.target
        this.setState({
            [name]:value
        })
    }
    handleClick = () => {
        let updatedBook = this.state
        updatedBook.id = this.props.book.id
        this.props.edit(updatedBook)
        this.props.toggle()
    }

    render(){
        return(
            <div>
            
            <form 
            class = 'editView' style={{background: this.props.book.cover}}
            onClick= {(e) => e.stopPropagation()}>
            <h1 style = {{color: 'green'}}>hi</h1>
            <input
            type= 'text'
            name= 'title'
            placeholder='title'
            onChange={this.handleChange}
            value={this.state.title}
            />
            <input
            type= 'text'
            name= 'author'
            placeholder='author'
            onChange={this.handleChange}
            value={this.state.author}
            />
            <input
            type= 'text'
            name= 'cover'
            placeholder='cover'
            onChange={this.handleChange}
            value={this.state.cover}
            />
            <button onClick = {this.handleClick}>Edit</button>
            <button type = 'button' onClick={this.props.delete}>Delete</button>
            </form>
            </div>
        )
    }

}
//setting type = 'button' stops the autosubmit that comes with buttons on forms :P 