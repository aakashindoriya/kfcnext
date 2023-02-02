import thunk from 'redux-thunk';

import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import authReducer from "./reducer/auth.reducer"
import { menuReducer } from './reducer/menu.reducer';
import cartReducer from './reducer/cart.reducer';
import { adminAuthReducer } from './reducer/adminauth.reducer';
let root=combineReducers({
    auth:authReducer,
    menu:menuReducer,
    cart:cartReducer,
    admin:adminAuthReducer
})


export const store = createStore(
    root,
    applyMiddleware(thunk)
);