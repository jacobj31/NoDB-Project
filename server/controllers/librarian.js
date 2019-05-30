let randomColor = require('randomcolor')

let id = 1

let books = [{
    id: id++,
    title: "Fablehaven",
    author: "Brandon Mull",
    cover: "blue",    
},
{
    id: id++,
    title: "Return of the King",
    author: "J.R.R. Tolkien",
    cover: "green"
}
]

module.exports = {
    read: (req, res) => res.send(books),
    create: (req, res) => {
        let newBook = req.body
        newBook.id = id++
        newBook.cover = randomColor({luminosity:'bright', hue: 'random'})
        books.push(newBook)
        res.send(books)
    }, 
    delete: (req, res) => {
        let {id} = req.params
        let index = books.findIndex(book => +book.id === +id)
        books.splice(index, 1)
        res.send(books)
    },
    edit: (req, res) => {
        let {id} = req.params
        let newBook = req.body
        newBook.id = id
        let index = books.findIndex(book => +book.id === +id)
        books.splice(index, 1, newBook)
        res.send(books)
    }
}