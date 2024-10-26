const express = require('express');
const app = express();
const todosRoutes = require('./routes/todo.js'); // Mengimpor file route untuk todos
const port = 3002; // Menentukan port 3002 untuk server

// Middleware untuk parsing JSON
app.use(express.json());

// Menggunakan rute untuk todos
app.use('/todos', todosRoutes);

// Mengatur view engine menjadi EJS
app.set('view engine', 'ejs');

// Rute dasar yang akan merender file 'index.ejs'
app.get('/', (req, res) => {
    res.render('index');
});

// Rute untuk halaman kontak yang akan merender file 'contact.ejs'
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
