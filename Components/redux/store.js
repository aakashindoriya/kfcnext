import thunk from 'redux-thunk';

import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import authReducer from "./reducer/auth.reducer"
import { menuReducer } from './reducer/menu.reducer';
import cartReducer from './reducer/cart.reducer';
let root=combineReducers({
    auth:authReducer,
    menu:menuReducer,
    cart:cartReducer,
})


export const store = createStore(
    root,
    applyMiddleware(thunk)
);