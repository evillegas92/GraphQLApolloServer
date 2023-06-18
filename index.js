const { ApolloServer, gql } = require("apollo-server");
const BooksApi = require("./datasources/books");

const typeDefs = gql`
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

const resolvers = {
    Query: {
        allBooks: (parent, args, context, info) => {
            return context.dataSources.booksApi.getBooks();
        },
        bookById: (parent, args, context, info) => {
            return context.dataSources.booksApi.getBookById(args.id);
        },
        books: (parent, args, context, info) => {
            return context.dataSources.booksApi.getBooks(args);
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

