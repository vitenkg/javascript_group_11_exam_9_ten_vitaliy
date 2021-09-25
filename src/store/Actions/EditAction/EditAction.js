import axiosApi from "../../../axiosApi";

export const EDIT_CONTACT = 'ADD_CONTACT';

export const FETCH_EDIT_CONTACTS_REQUEST = 'FETCH_EDIT_CONTACTS_REQUEST';
export const FETCH_EDIT_CONTACTS_SUCCESS = 'FETCH_EDIT_CONTACTS_SUCCESS';
export const FETCH_FETCH_CONTACTS_SUCCESS = 'FETCH_FETCH_CONTACTS_SUCCESS';
export const FETCH_EDIT_CONTACTS_FAILURE = 'FETCH_EDIT_CONTACTS_FAILURE';


export const editContact = data => ({type: EDIT_CONTACT, payload: data});

export const fetchEditContactsRequest = () => ({type: FETCH_EDIT_CONTACTS_REQUEST});
export const fetchEditContactsSuccess = () => ({type: FETCH_EDIT_CONTACTS_SUCCESS});
export const fetchFetchContactsSuccess = data => ({type: FETCH_FETCH_CONTACTS_SUCCESS, payload: data});
export const fetchEditContactsFailure = () => ({type: FETCH_EDIT_CONTACTS_FAILURE});


export const fetchDataContactEdit = (data, id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchEditContactsRequest());
            await axiosApi.patch('/contacts/' + id + '.json', {
                name: data.name,
                phone: data.phone,
                email: data.email,
                photo: data.photo,
            });
            dispatch(fetchEditContactsSuccess());
        } catch (e) {
            dispatch(fetchEditContactsFailure())
        }
    };
};

export const fetchDataContact = id => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchEditContactsRequest());
            const response = await axiosApi.get('/contacts/' + id + '.json');
            const data = {
                name: response.data.name,
                phone: response.data.phone,
                email: response.data.email,
                photo: response.data.photo,
            }
            dispatch(fetchFetchContactsSuccess(data));
        } catch (e) {
            dispatch(fetchEditContactsFailure())
        }
    };
};