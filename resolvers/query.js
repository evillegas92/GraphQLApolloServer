module.exports = {
    allBooks: (parent, args, context, info) => {
        return context.dataSources.booksApi.getBooks();
    },
    bookById: (parent, args, context, info) => {
        return context.dataSources.booksApi.getBookById(args.id);
    },
    books: (parent, args, context, info) => {
        return context.dataSources.booksApi.getBooks(args);
    },
    allPublishers: (parent, args, context, info) => {
        return context.dataSources.publishersApi.getPublishers();
    }
};