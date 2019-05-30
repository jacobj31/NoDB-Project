import React, {Component} from 'react'

export default class Form extends Component{
    constructor(props){
        super(props)

        let {title, author, cover} = props.book
        this.state ={
            title,
            author,
            cover      
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
        console.log(updatedBook)

    }

    render(){
        return(
            <div style={{width:'100px', height: '100px',background:'black'}}>
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
            <button onClick = {this.handleClick}>Make the Change</button>
            </div>
        )
    }

}