import axios from 'axios';
import { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from './actionTypes';

export const deleteProduct = (productId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_PRODUCT_REQUEST });
        try {
            await axios.delete(`/products/${productId}`);
            dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
        } catch (error) {
            dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
        }
    };
};