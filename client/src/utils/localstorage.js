export const getSavedProductIds = () => {
    const savedProductIds = localStorage.getItem('saved_products')
      ? JSON.parse(localStorage.getItem('saved_products'))
      : [];
  
    return savedProductIds;
  };
  
  export const saveProductIds = (productIdArr) => {
    if (productIdArr.length) {
      localStorage.setItem('saved_products', JSON.stringify(productIdArr));
    } else {
      localStorage.removeItem('saved_products');
    }
  };
  