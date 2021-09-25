import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import InputForm from "../../Components/InputForm/InputForm";
import {editContact, fetchDataContact, fetchDataContactEdit} from "../../store/Actions/EditAction/EditAction";

const EditContacts = ({match, history}) => {
    const id = match.params.id.slice(1);
    const dispatch = useDispatch();
    const contact = useSelector(state => state.edit.contact);

    useEffect(() => {
        dispatch(fetchDataContact(id));
    }, [dispatch, id]);

    const onChangeHandler = e => {
        let {name, value} = e.target;
        dispatch(editContact({name, value}))
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(fetchDataContactEdit(contact, id));
        history.replace('/');
    };
    return (
        <>
            <InputForm
                contact={contact}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
                url={contact.photo}
                textButton="Edit"
            />
        </>
    );
};

export default EditContacts;