const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Product {
    _id: ID
    title: String
    description: String
    image: String
    startBid: Float
    category: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    watchlist: [String]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories(category:String): [Product]
    products: [Product]
    product(_id: ID!): Product
    user(_id: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(_id: ID, username: String, email: String, password: String, watchlist:[String]): User
    createProduct(title: String, description: String, image: String, startBid: Float, category: String ): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
