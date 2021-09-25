import axiosApi from "../../../axiosApi";

export const ADD_CONTACTS = 'ADD_CONTACTS';

export const FETCH_ADD_CONTACTS_REQUEST = 'FETCH_ADD_CONTACTS_REQUEST';
export const FETCH_ADD_CONTACTS_SUCCESS = 'FETCH_ADD_CONTACTS_SUCCESS';
export const FETCH_ADD_CONTACTS_FAILURE = 'FETCH_ADD_CONTACTS_FAILURE';


export const addContacts = data => ({type: ADD_CONTACTS, payload: data});

export const fetchAddContactsRequest = () => ({type: FETCH_ADD_CONTACTS_REQUEST});
export const fetchAddContactsSuccess = data => ({type: FETCH_ADD_CONTACTS_SUCCESS, payload: data});
export const fetchAddContactsFailure = () => ({type: FETCH_ADD_CONTACTS_FAILURE});



export const fetchDataContactAdd = data => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchAddContactsRequest());
            await axiosApi.post('/contacts.json', data);
            dispatch(fetchAddContactsSuccess());
        } catch (e) {
            dispatch(fetchAddContactsFailure())
        }
    };
};