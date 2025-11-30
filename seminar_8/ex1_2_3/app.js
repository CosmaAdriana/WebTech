const express = require('express');
const app = express();
const port = 3000;
const Book = require('./Book');
const e = require('express');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bookRouter = express.Router();
app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.listen(port, () => {
    console.log('Running on port' + port);
});

let books = [new Book(1, "Dune", "sf", "Frank Herbert"),
new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
new Book(3, "Foundation", "sf", "Asimov")]

bookRouter.route('/books')
    .get( (req, res) => {
        let filteredBooks = [];
        if(req.query.genre){
            filteredBooks = books.filter(book => book.genre === req.query.genre);
        } else{
            filteredBooks = books;
        }
        res.json(filteredBooks);
    })
   .post( (req, res) => {
    // VALIDARI
        if(!req.body.id || !req.body.name || !req.body.genre || !req.body.author) {
            return res.status(400).json({ error: 'Toate câmpurile sunt obligatorii' });
        }
        
        if(typeof req.body.id !== 'number') {
            return res.status(400).json({ error: 'ID-ul trebuie să fie un număr' });
        }
        
        if(books.find(book => book.id === req.body.id)) {
            return res.status(400).json({ error: 'O carte cu acest ID există deja' });
        }
        let newBook = new Book( req.body.id, 
                                req.body.name,
                                req.body.genre,
                                req.body.author);
        books.push(newBook);
        console.log(books);
        return res.json(newBook);
    })

// un nou request de tip GET pentru a returna lista tuturor cărților în ordine alfabetică
app.get('/books/sorted', (req, res) => {
    const sortedBooks = books.sort((a, b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    });
    res.json(sortedBooks);
});

bookRouter.route('/books/:bookId')
  .put((req, res) => {
    const bookId = Number(req.params.bookId);   

    const bookModif = books.find(b => b.id === bookId);

    if (!bookModif) {
      return res.status(404).json({ error: 'Cartea nu a fost gasita' });
    }

    bookModif.name   = req.body.name;
    bookModif.genre  = req.body.genre;
    bookModif.author = req.body.author;

    return res.json(bookModif);
  });
  
// Metoda de tip DELETE
bookRouter.route('/books/:bookId')
  .delete((req, res) => {
    const bookId = Number(req.params.bookId);
    const bookExists = books.some(b => b.id === bookId);
    if (!bookExists) {
      return res.status(404).json({ error: 'Cartea nu a fost găsită' });
    }
    books = books.filter(b => b.id !== bookId);
    return res.json({ message: 'Cartea a fost ștearsă cu succes' });
  });

