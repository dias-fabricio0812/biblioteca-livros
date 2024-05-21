const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/biblioteca', { useNewUrlParser: true, useUnifiedTopology: true });

const livroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  isbn: String,
  paginas: Number,
  ano: Number,
  valor: Number
});

const Livro = mongoose.model('Livro', livroSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  
  try {
    const livros = await Livro.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
      
    const count = await Livro.countDocuments();
    
    res.render('index', {
      livros,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
