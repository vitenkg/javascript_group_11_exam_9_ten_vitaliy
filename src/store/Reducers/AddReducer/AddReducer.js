import {
    ADD_CONTACTS,
    FETCH_ADD_CONTACTS_FAILURE,
    FETCH_ADD_CONTACTS_REQUEST,
    FETCH_ADD_CONTACTS_SUCCESS
} from "../../Actions/AddAction/AddAction";


const initialState = {
    contact: {
        name:'',
        phone: '',
        email: '',
        photo: ''
    },
    loading: false,
    success: null,
    error: null,
};

const AddReducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case ADD_CONTACTS:
            return {...state, contact: {...state.contact, [payload.name]: payload.value}};
        case FETCH_ADD_CONTACTS_REQUEST:
            return {...state, error: null, loading: true};
        case FETCH_ADD_CONTACTS_SUCCESS:
            return {...state, loading: false, success: true};
        case FETCH_ADD_CONTACTS_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default AddReducer;