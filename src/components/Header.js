import React, {Component} from 'react'

export default class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
            title:'',
            author:''
           
        }
    }
    handleChange = e => {
        let {value, name} = e.target
        this.setState({
            [name]:value
        })
    }

    handleClick = () => {
        let newBook = this.state
        this.props.addBook(newBook)
        this.setState({
            title:'',
            author:''
        })
    }

    render(){
        return(
            <header style={{height:"100px", background:"black", width:"100vw"}}>
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
            value={this.state.author}/>
            <button onClick={this.handleClick}>Add Libro</button>
            
            
            
            
            
            
            </header>

            
        )
    }
}