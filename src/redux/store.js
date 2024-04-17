import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/product/rootReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const Store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
      );
export default Store;