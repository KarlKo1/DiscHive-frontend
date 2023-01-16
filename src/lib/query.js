export const PRODUCT_QUERY = `
query {
    products {
      data {
        attributes {
          title
          description
          price
          condition
          slug
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;
