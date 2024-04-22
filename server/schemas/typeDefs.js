const typeDefs = `#graphql
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }
    type Book {
        _id: ID!
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }
        
    input BookInput {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    # Set up an Auth type to handle returning data from a user creating or user login
    type Auth {
      token: ID!
      user: User
    }

    type Query {
        user(userId: ID!): User
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: BookInput!): User
        deleteBook(bookId: ID!): User
    }
`;
module.exports = typeDefs;
