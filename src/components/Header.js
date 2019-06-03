import React, {Component} from 'react'

export default class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
            title:'',
            author:'',          
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
            author:'',
        })
        this.setState ({
            addView: !this.state.addView
        })
      
    }
    toggleAdd = () => {
          this.setState ({
            addView: !this.state.addView
        })
    }

    render(){
        return(
            <header>
            <div></div>
            <h1>Ye Olde Library</h1>
            <button className = 'epic' onClick={this.toggleAdd}>Add Book</button> 

            { this.state.addView ? 
            <div className = 'editView' style = {{background: 'darkcyan'}}>

            <input className = 'add'
            type= 'text'
            name= 'title'
            placeholder='title'
            onChange={this.handleChange}
            value={this.state.title}
            />
            <input className = 'add' style={{marginBottom:'200px', width: '50%'}}
            type= 'text'
            name= 'author'
            placeholder='author'
            onChange={this.handleChange}
            value={this.state.author}
            />
            <div className = 'buttonHouse'>
                <button className = 'fancy' onClick={this.toggleAdd}>Abort</button>
                <button className = 'fancy' onClick={this.handleClick}>Add</button>
            </div>
            </div>
            : undefined}
           
           
           </header>
        )
    }
}
