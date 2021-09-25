import axiosApi from "../../../axiosApi";

export const FETCH_CONTACTS_REQUEST = 'FETCH_ADD_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_ADD_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_ADD_CONTACTS_FAILURE';


export const fetchContactsRequest = () => ({type: FETCH_CONTACTS_REQUEST});
export const fetchContactsSuccess = data => ({type: FETCH_CONTACTS_SUCCESS, payload: data});
export const fetchContactsFailure = () => ({type: FETCH_CONTACTS_FAILURE});



export const fetchData = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchContactsRequest());
            const response = await axiosApi.get('/contacts.json');
            const data = Object.keys(response.data).map(type => {
                if (response.data[type].photo === '') {
                    response.data[type].photo = 'https://www.neils.org/wp-content/uploads/2016/06/no-image.png';
                }
                return {name: response.data[type].name,
                    phone: response.data[type].phone,
                    id: type,
                    photo: response.data[type].photo,
                    email: response.data[type].email
                }
            });
            dispatch(fetchContactsSuccess(data));
        } catch (e) {
            dispatch(fetchContactsFailure())
        }
    };
};

export const fetchDataDelete = id => {
    return async (dispatch, getState) => {
        try {
            await axiosApi.delete('/contacts/' + id + '.json');

        } catch (e) {
            dispatch(fetchContactsFailure())
        }
    };
};