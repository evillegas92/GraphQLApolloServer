module.exports = {
    favoriteBook: (parent, args, context, info) => {
        return context.dataSources.booksApi.favoriteBook(args.bookId);
    },
    addPublisher: (parent, args, context, info) => {
        return context.dataSources.publishersApi.addPublisher(args.publisher);
    },
};