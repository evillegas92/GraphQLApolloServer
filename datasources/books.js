const { DataSource } = require("apollo-datasource");

class BooksApi extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {

    }

    getBooks() {
        return books;
    }
}

module.exports = BooksApi;

const books = [
    {
        id: "1001",
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        id: "1002",
        title: "City of Glass",
        author: "Paul Auster"
    }
];