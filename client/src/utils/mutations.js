import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_TO_WATCHLIST = gql`
  mutation addToWatchlist($productId: ID!) {
    addToWatchlist(productId: $productId) {
      _id
      username
      email
      watchlist {
        _id
        title
        description
        startBid
        category 
        image
      }
    }
  }
`;
