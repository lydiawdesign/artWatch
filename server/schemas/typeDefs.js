const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Art {
    _id: ID
    name: String
    description: String
    image: String
    startBid: Float
    category: Category
    price: Float
    maxBidder: ID
    expiration: Date
    sold: Boolean
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Art]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Art]
    product(_id: ID!): Art
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateArt(_id: ID!, quantity: Int!): Art
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
