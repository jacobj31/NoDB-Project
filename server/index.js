const express = require ('express')
const bookCtrl = require('./controllers/librarian')



const app = express()
app.use(express.json())



app.get('/api/books', bookCtrl.read)
app.post('/api/books', bookCtrl.create)
app.put('/api/books/:id', bookCtrl.edit)
app.delete('/api/books/:id', bookCtrl.delete)







const port = 4000
app.listen(port, () => console.log("The port\'s power level... it\'s over 9000!!!!"))