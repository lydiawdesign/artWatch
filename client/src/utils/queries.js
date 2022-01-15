import { gql } from '@apollo/client';


//???
export const QUERY_PRODUCTS = gql`
  query getProducts($category: String) {
    products(category: $category) {
      _id
      title
      description
      starBid
      image
      category 
      
    }
  }
`;


export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      title
      description
      startBid
      image
      category 

      
    }
  }
`;

//???
export const QUERY_CATEGORY = gql`
  {
    query products ($category:String!) 
    products {
      _id
      title
      description
      startBid
      category 
      image
    }
       
    
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      products{
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
