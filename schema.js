const { gql } = require("apollo-server");

module.exports = gql`
type Book {
    id: ID!
    title: String
    author: String
}

type Query {
    allBooks: [Book]
    bookById(id: ID): Book
    books(
        id: ID
        title: String
        author: String
    ): [Book]
}
`;