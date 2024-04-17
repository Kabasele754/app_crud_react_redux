import { combineReducers } from "redux";
import productReducer from "./fetchProductsReducer";

const rootReducer = combineReducers({
        products: productReducer,
       
});
      
export default rootReducer;