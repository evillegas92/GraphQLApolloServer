module.exports = {
    Query: {
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
    },
    Publisher: {
        books: (parent, args, context, info) => {
            const allBooks = context.dataSources.booksApi.getBooks();
            return allBooks.filter(b => b.publisher.id === parent.id);
        }
    }
};