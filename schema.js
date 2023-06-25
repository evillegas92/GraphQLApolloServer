const { gql } = require("apollo-server");

module.exports = gql`
type Book {
    id: ID!
    title: String
    author: String
    favorite: Boolean
    publisher: Publisher
}

type Publisher {
    id: ID!
    name: String
    type: PublisherType
    books: [Book]
}

input PublisherInput {
    name: String!
    type: PublisherType
}

enum PublisherType {
    TypeOne,
    TypeTwo
}

type Error {
    code: String
    message: String
    token: String
}

union BookOrError = Book | Error

type Query {
    allBooks: [Book]
    bookById(id: ID): BookOrError
    books(
        id: ID
        title: String
        author: String
    ): [Book]
    allPublishers: [Publisher]
}

type Mutation {
    favoriteBook(bookId: ID): Book
    addPublisher(publisher: PublisherInput): Publisher
}
`;