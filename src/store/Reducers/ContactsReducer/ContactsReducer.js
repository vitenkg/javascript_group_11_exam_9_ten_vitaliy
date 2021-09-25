import {
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS
} from "../../Actions/ContactsAction/ContactsAction";

const initialState = {
    loading: false,
    list: [],
    error: null,
};

const ContactsReducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case FETCH_CONTACTS_REQUEST:
            return {...state, error: null, loading: true};
        case FETCH_CONTACTS_SUCCESS:
            return {...state, loading: false, list: payload};
        case FETCH_CONTACTS_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default ContactsReducer;