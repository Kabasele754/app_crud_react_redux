import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'http://localhost:3001/products';

const ProductService = {
  getAllProducts: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  addProduct: async (newProduct) => {
    try {
      const response = await axios.post(BASE_URL, newProduct);
      toast.success('Product Add successfully.')
      return response.data;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  },

  getProductById: async (productId) => {
        try {
          const response = await axios.get(`${BASE_URL}/${productId}`);
          return response.data;
        } catch (error) {
          console.error('Error fetching product by ID:', error);
          throw error;
        }
      },

  updateProduct: async (productId, updatedProduct) => {
    try {
      const response = await axios.put(`${BASE_URL}/${productId}`, updatedProduct);
      toast.success('Product Update successfully.')
      return response.data;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },

  deleteProduct: async (productId) => {
    try {
      await axios.delete(`${BASE_URL}/${productId}`);
      toast.success('Product Delete successfully.')
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  },
};

export default ProductService;
