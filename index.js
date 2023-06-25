const { ApolloServer, gql, ApolloError } = require("apollo-server");
const BooksApi = require("./datasources/books");
const PublishersApi = require("./datasources/publishers");
const typeDefs = require("./schema.js");
const resolvers = require("./resolvers");

const dataSources = () => ({
    booksApi: new BooksApi(),
    publishersApi: new PublishersApi(),
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [],
    debug: false,
    formatError: (error) => {
        if (error.extensions.code == "INTERNAL_SERVER_ERROR") {
            return new ApolloError("We are having some trouble", "ERROR")
        }
    }
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`graphQL server running at ${ url }`);
});

