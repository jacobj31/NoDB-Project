import React, {Component} from 'react'
import axios from 'axios'
import Book from './Book'
import Header from './Header'

export default class Books extends Component {
    constructor(props){
        super(props)

        this.state = {
            books: []
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
    }


render(){
    return(

            <div>
                <Header addBook = {this.addBook}/>
                {this.state.books.map(book=> {
                    return(
                        <Book 
                        key = {book.id}
                        book = {book}
                        delete = {() => this.deleteBook(book.id)}/> 
                    )
                })}
            </div>
        )}
}

