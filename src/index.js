import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from './App';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import AddReducer from "./store/Reducers/AddReducer/AddReducer";
import ContactsReducer from "./store/Reducers/ContactsReducer/ContactsReducer";
import EditReducer from "./store/Reducers/EditReducer/EditReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    add: AddReducer,
    contactsList: ContactsReducer,
    edit: EditReducer,
});

const store = createStore(rootReducer, composeEnhancer(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

