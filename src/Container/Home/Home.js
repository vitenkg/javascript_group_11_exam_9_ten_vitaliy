import React, {useEffect, useState} from 'react';
import './Home.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../store/Actions/ContactsAction/ContactsAction";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import Modal from "../../Components/UI/Modal/Modal";
import {useHistory} from "react-router-dom";

const Home = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const contactsList = useSelector(state => state.contactsList.list);
    const [modalOpen, setModalOpen] = useState(false);
    const [contactSelect, setContactSelect] = useState({});


    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch, history]);

    const onClickHandler = (data) => {
        setModalOpen(true);
        setContactSelect(data);
    };

    const onEditHandler = id => {
        setModalOpen(false);
        history.push('/edit:' + id);
    };

    const onCancelModalHandler = () => {
        setModalOpen(false);
    }

    return (
        <>
            <Modal show={modalOpen}>
                <ContactInfo
                    contact={contactSelect}
                    onCancel={onCancelModalHandler}
                    onEdit = {onEditHandler}
                />
            </Modal>
            <ul className="ContactListUl">
                {contactsList.map(contact => (
                        <li
                            key={contact.id}
                            className="ContactListLi"
                            onClick={() => onClickHandler(contact)}
                        >
                            <p className="ContactListP">
                                <img src={contact.photo} alt="avatar" className="ContactListImg"/>
                            </p>
                            <p className="ContactListP">
                                {contact.name}
                            </p>
                            <p className="ContactListP">
                                {contact.phone}
                            </p>

                        </li>
                    )
                )}
            </ul>
        </>
    );
};

export default Home;