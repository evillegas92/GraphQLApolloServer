const Query = require("./resolvers/query");
const Publisher = require("./resolvers/publisher");
const Mutation = require("./resolvers/mutation");

module.exports = {
    Query,
    Publisher,
    Mutation,
    BookOrError: {
        __resolveType(obj) {
            if (obj.code) {
                // if the object we get has a Code property, it is an Error
                return "Error"
            }
            return "Book"
        }
    }
};