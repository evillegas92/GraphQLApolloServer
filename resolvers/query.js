module.exports = {
    allBooks: (parent, args, context, info) => {
        return context.dataSources.booksApi.getBooks();
    },
    bookById: (parent, args, context, info) => {
        try {
            return context.dataSources.booksApi.getBookById(args.id);
        } catch (error) {
            return {
                code: "Error",
                message: "Something went wrong.",
                token: "123abc"
            }
        }
    },
    books: (parent, args, context, info) => {
        return context.dataSources.booksApi.getBooks(args);
    },
    allPublishers: (parent, args, context, info) => {
        return context.dataSources.publishersApi.getPublishers();
    }
};