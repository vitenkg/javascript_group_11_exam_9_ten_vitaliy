import React, {useState} from 'react';
import './AddContacts.css';
import {useDispatch, useSelector} from "react-redux";
import {addContacts, fetchDataContactAdd} from "../../store/Actions/AddAction/AddAction";

const AddContacts = () => {
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
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label className="AddLabel">
                    Введите Имя
                    <input
                        type="text"
                        className="AddInput"
                        name="name"
                        onChange={onChangeHandler}
                    />
                </label>
                <label className="AddLabel">
                    Введите номер
                    <input
                        type="number"
                        className="AddInput"
                        name="phone"
                        onChange={onChangeHandler}
                    />
                </label>
                <label className="AddLabel">
                    Введите E-mail
                    <input
                        type="email"
                        className="AddInput"
                        name="email"
                        onChange={onChangeHandler}
                    />
                </label>
                <label className="AddLabel">
                    ВВедите адрес аватара
                    <input
                        type="url"
                        className="AddInput"
                        name="photo"
                        onChange={onChangeHandler}
                    />
                </label>
                <p><img src={urlAvatar} alt="Avatar" className="AddImg"/></p>
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddContacts;