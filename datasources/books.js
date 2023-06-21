const { DataSource } = require("apollo-datasource");
const _ = require("lodash");

class BooksApi extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {

    }

    getBooks() {
        return books;
    }

    getBookById(id) {
        const filteredBooks = _.filter(books, { id });
        if (!filteredBooks || filteredBooks.length === 0) {
            return null;
        }
        return filteredBooks[0];
    }

    getBooks(args) {
        return _.filter(books, args);
    }

    favoriteBook(id) {
        const filteredBooks = _.filter(books, { id });
        if (!filteredBooks || filteredBooks.length === 0) {
            return null;
        }
        const book = filteredBooks[0];
        book.favorite = !book.favorite;
        return book;
    }
}

module.exports = BooksApi;

const books = [
    {
        id: "1001",
        title: "The Awakening",
        author: "Kate Chopin",
        publisher: {
            id: "1001",
            name: "Puenguin Media",
        }
    },
    {
        id: "1002",
        title: "City of Glass",
        author: "Paul Auster",
        publisher: {
            id: "1001",
            name: "Puenguin Media",
        }
    }
];