import React, {Component} from 'react'
import axios from 'axios'
import Book from './Book'
import Header from './Header'
import Bookshelf from './Bookshelf'

export default class Books extends Component {
    constructor(props){
        super(props)

        this.state = {
            books: [],
            edit: false
        }
    }
    componentDidMount(){
        axios.get('/api/books')
        .then(response => this.setState({books: response.data})
        ).catch(err => console.log('sorry, pal', err))
    }
    addBook = (newBook) => {
        axios.post('/api/books', newBook)
        .then(response => {this.setState({books: response.data})})
        .catch(err => console.log('sorry, pal', err))
    }
    deleteBook = id => {
        axios.delete(`/api/books/${id}`)
        .then(response => this.setState({books: response.data}))
        .catch(err => console.log('sorry, pal', err))
        this.setState({edit: false})
    }
    editBook = book => {
        axios.put(`/api/books/${book.id}`, book)
        .then(response => this.setState({books: response.data}))
        .catch(err => console.log('sorry, pal', err))
        this.setState({edit: false})
    }

    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }

render(){
    return(
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw'}}>
            <Header addBook = {this.addBook}/>
            <body>
                <div className="bookholder">
                <div style={{display: 'flex'}}>
                    {this.state.books.map(book=> {
                        return(
                            <Book 
                            key = {book.id}
                            book = {book}
                            delete = {() => this.deleteBook(book.id)}
                            editBook = {this.editBook}
                            toggle= {this.toggleEdit}
                            edit = {this.state.edit}
                            /> )})}        
                </div> 
                </div> 
                <Bookshelf/>
            </body>
        </div>)}
}

