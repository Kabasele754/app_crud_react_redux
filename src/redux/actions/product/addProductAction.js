import axios from 'axios';
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS } from './typeProductAction';

export const addProduct = (productData) => {
    return async (dispatch) => {
        dispatch({ type: ADD_PRODUCT_REQUEST });
        try {
            const response = await axios.post('/products', productData);
            dispatch({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.message });
        }
    };
};