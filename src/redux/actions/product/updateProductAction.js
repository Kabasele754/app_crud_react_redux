import axios from 'axios';
import { UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE } from './actionTypes';

export const updateProduct = (productId, productData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });
        try {
            const response = await axios.put(`/products/${productId}`, productData);
            dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
        }
    };
};