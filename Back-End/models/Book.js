const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    id: Number,
    titulo: String,
    num_paginas: Number,
    isbn: Number,
    editora: String,
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = {
  Book,
  bookSchema,
};
