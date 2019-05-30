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
        books.push(newBook)
        res.send(books)
        console.log(req.body)
    }

}