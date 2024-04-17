import axios from 'axios';

const API_URL = 'http://localhost:3001/products';

const ProductService = {
        getAllProducts: async () => {
                try {
        const response = await axios.get('http://localhost:3001/products');
        console.log(" voir sefvice",response)
        return response
        } catch (error) {
        console.error('Error fetching products:', error);
                      }
                    },
  addProduct: async (newProduct) => {
    try {
      const response = await axios.post(API_URL, newProduct);
      return response.data;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  },
  updateProduct: async (productId, updatedProduct) => {
    try {
      const response = await axios.put(`${API_URL}/${productId}`, updatedProduct);
      return response.data;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },
  deleteProduct: async (productId) => {
    try {
      await axios.delete(`${API_URL}/${productId}`);
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  },
};

export default ProductService;
