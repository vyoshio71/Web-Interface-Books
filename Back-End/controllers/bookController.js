const { Book: BookModel } = require("../models/Book");

const bookController = {

  create: async (req, res) => {

    try {

      const book = {
        id: req.body.id,
        titulo: req.body.titulo,
        num_paginas: req.body.num_paginas,
        isbn: req.body.isbn,
        editora: req.body.editora,
      };

      const response = await BookModel.create(book);

      res.status(201).json({ response, msg: "Livro adicionado com sucesso!" });

    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const book = await BookModel.find();

      res.json(book);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      console.log(req.params.id)
      const id = req.params.id;
      
      const book = await BookModel.findById(id);
      
      if (!book) {
        res.status(404).json({ msg: "Livro não encontrado" });
        return;
      }
      else{
        res.json(book);
      }
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const book = await BookModel.findById(id);

      if (!book) {
        res.status(404).json({ msg: "Livro não encontrado" });
        return;
      }

      const deletedBook = await BookModel.findByIdAndDelete(id);
      
      res.status(200).json({ deletedBook, msg: "Livro excluido com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;

    const book = {
      id: req.body.id,
      titulo: req.body.titulo,
      num_paginas: req.body.num_paginas,
      isbn: req.body.isbn,
      editora: req.body.editora,
    };

    const updatedBook = await BookModel.findByIdAndUpdate(id, book);

    if (!updatedBook) {
      res.status(404).json({ msg: "Livro não encontrado." });
      return;
    }

    res.status(200).json({book, msg: 'Livro atualizado com sucesso!'})
  },
};

module.exports = bookController;
