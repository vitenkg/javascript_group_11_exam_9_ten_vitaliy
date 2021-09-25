import React, {useState} from 'react';
import './AddContacts.css';
import {useDispatch, useSelector} from "react-redux";
import {addContacts, fetchDataContactAdd} from "../../store/Actions/AddAction/AddAction";
import InputForm from "../../Components/InputForm/InputForm";
import {fetchData} from "../../store/Actions/ContactsAction/ContactsAction";

const AddContacts = ({history}) => {
    const dispatch = useDispatch();
    const contact = useSelector(state => state.add.contact);
    const  [urlAvatar, setUrlAvatar] = useState('https://www.neils.org/wp-content/uploads/2016/06/no-image.png');

    const onChangeHandler = e => {
        let {name, value} = e.target;
        if (name === 'photo') {
            setUrlAvatar(value);
        }

        dispatch(addContacts({name, value}))
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(fetchDataContactAdd(contact));
        dispatch(fetchData());
        history.push('/');
    };

    return (
        <div>
            <InputForm
                contact={contact}
                onSubmit={onSubmitHandler}
                onChange={onChangeHandler}
                url={urlAvatar}
                textButton="Add"
            />
        </div>
    );
};

export default AddContacts;