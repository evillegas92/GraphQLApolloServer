const { gql } = require("apollo-server");

module.exports = gql`
type Book {
    id: ID!
    title: String
    author: String
    publisher: Publisher
}

type Publisher {
    id: ID!
    name: String
    books: [Book]
}

type Query {
    allBooks: [Book]
    bookById(id: ID): Book
    books(
        id: ID
        title: String
        author: String
    ): [Book]
    allPublishers: [Publisher]
}
`;