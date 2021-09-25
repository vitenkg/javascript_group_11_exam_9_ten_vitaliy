import {
    EDIT_CONTACT,
    FETCH_EDIT_CONTACTS_FAILURE,
    FETCH_EDIT_CONTACTS_REQUEST,
    FETCH_EDIT_CONTACTS_SUCCESS,
    FETCH_FETCH_CONTACTS_SUCCESS
} from "../../Actions/EditAction/EditAction";


const initialState = {
    loading: false,
    success: null,
    contact: {},
    error: null,
};

const EditReducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case EDIT_CONTACT:
            console.log(payload.name);
            console.log(payload.value);
            return {...state, contact: {...state.contact, [payload.name]: payload.value}};
        case FETCH_EDIT_CONTACTS_REQUEST:
            return {...state, error: null, loading: true};
        case FETCH_EDIT_CONTACTS_SUCCESS:
            return {...state, loading: false, success: true};
        case FETCH_FETCH_CONTACTS_SUCCESS:
            return {...state, loading: false, contact: payload};
        case FETCH_EDIT_CONTACTS_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default EditReducer;