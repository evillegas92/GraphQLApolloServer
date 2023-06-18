const { ApolloServer, gql } = require('apollo-server');
const BooksApi = require("./datasources/books");

const typeDefs = gql`
    type Book {
        id: ID!
        title: String
        author: String
    }

    type Query {
        books: [Book]
        bookById(id: ID): Book
    }
`;

const resolvers = {
    Query: {
        books: (parent, args, context, info) => {
            return context.dataSources.booksApi.getBooks();
        },
        bookById: (parent, args, context, info) => {
            return context.dataSources.booksApi.getBookById(args.id);
        }
    }
};

const dataSources = () => ({
    booksApi: new BooksApi()
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: []
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`graphQL server running at ${ url }`);
});

