import { gql } from '@apollo/client';

export const QUERY_SINGLE_PRODUCT = gql`
  query getProduct($_id: String!) {
    getProduct(_id: $_id) {
      _id
      title
      description
      startBid
      image
      category 
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
    {
    products{
      _id
      title
      description
      image
      startBid
      category
    }
  }
`;

//Working
// export const QUERY_CATEGORY = gql`
//   {
//     query categories ($category:String) {
//       categories(category:$category) {
//         _id
//         title
//         description
//         startBid
//         category 
//         image
//       }
         
//     }
    
    
//   }
// `;

// Working
export const QUERY_USER = gql`
  {
    user {
      _id
      username
      watchlist{
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
