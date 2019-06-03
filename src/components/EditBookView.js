import React, {Component} from 'react'

export default class Form extends Component{
    constructor(props){
        super(props)

        let {title, author, cover, text} = props.book
        this.state ={
            title,
            author,
            cover,
            text,
            view: true      
        }
    }

    handleChange = e => {
        let {value, name} = e.target
        this.setState({
            [name]:value
        })
    }
    handleClick = (e) => {
        let updatedBook = this.state
        updatedBook.id = this.props.book.id
        this.props.edit(updatedBook)
        this.props.toggle()
        e.preventDefault()
    }
    handleSubmit = (e) => {
            e.preventDefault()
            this.props.toggle()
        }
    toggleView = (e) => {
        this.setState({ 
            view: !this.state.view
        })
        e.stopPropagation()
    }

    render(){
        let {cover, title, author} = this.props.book
        return(
            <div>
            {this.state.view? 
            <div className = 'editView'
            style={{background: cover}}>
            <h1 style = {{textAlign: 'center', fontSize: '50px'}}>{title}</h1>
            <p style = {{textAlign: 'center', fontSize: '30px', marginBottom: '150px'}}>{author}</p>
            
            <div className = 'buttonHouse'>
            <div></div>
            <button className = 'fancy' onClick= {this.toggleView}>Edit</button>
            </div>
            </div>
            
            :
            
            <form 
            className = 'editView' 
            style={{background: this.props.book.cover}}
            onClick= {(e) => e.stopPropagation()}
            onSubmit = {this.handleSubmit}
            >            
            <input className = 'add'
            type= 'text'
            name= 'title'
            placeholder='title'
            onChange={this.handleChange}
            value={this.state.title}           
            />
            <input className = 'add'
            type= 'text'
            name= 'author'
            placeholder='author'
            onChange={this.handleChange}
            value={this.state.author}        
            />
            <input className = 'add' style={{marginBottom:'100px', width: '50%'}}
            type= 'text'
            name= 'cover'
            placeholder='cover'
            onChange={this.handleChange}
            value={this.state.cover}         
            />
            <div className = 'buttonHouse'>
            <button className = 'fancy' type = 'button' onClick={this.props.delete}>Delete</button>
            <button className = 'fancy' onClick= {() => this.props.toggle}>Cancel</button>
            <button className = 'fancy' onClick = {this.handleClick}>Edit</button> 
            </div>
            </form>
            }
            
            
            
            </div>
        )
    }

}
//setting type = 'button' stops the autosubmit that comes with buttons on forms :P 