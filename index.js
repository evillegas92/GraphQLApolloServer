const { ApolloServer, gql } = require("apollo-server");
const BooksApi = require("./datasources/books");
const typeDefs = require("./schema.js");
const resolvers = require("./resolvers");

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

