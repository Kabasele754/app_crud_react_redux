import { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: null,
};

const deleteProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
            return { ...state, loading: true, error: null };
        case DELETE_PRODUCT_SUCCESS:
            return { ...state, loading: false };
        case DELETE_PRODUCT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default deleteProductReducer;
