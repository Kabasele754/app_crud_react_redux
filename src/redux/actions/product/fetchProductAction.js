import axios from 'axios';
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from './typeProductAction';

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    };
};

export const fetchProductsSuccess = (data) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data
    };
};

export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    };
};

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        axios.get('http://localhost:8000/products')
            .then(response => {
                dispatch(fetchProductsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchProductsFailure(error.message));
            });
    };
};
