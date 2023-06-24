const { DataSource } = require("apollo-datasource");
const _ = require("lodash");

class PublishersApi extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {

    }

    getPublishers() {
        return publishers;
    }

    addPublisher(publisher) {
        publisher.id = 12;
        publishers.push(publisher);
        return publisher;
    }
}

module.exports = PublishersApi;

const publishers = [
    {
        id: "1001",
        name: "Puenguin Media",
        books: []
    },
    {
        id: "1002",
        name: "Superior Publishing",
        books: []
    },
];