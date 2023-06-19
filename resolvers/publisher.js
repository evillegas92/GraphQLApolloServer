module.exports = {
    books: (parent, args, context, info) => {
        const allBooks = context.dataSources.booksApi.getBooks();
        return allBooks.filter(b => b.publisher.id === parent.id);
    }
};