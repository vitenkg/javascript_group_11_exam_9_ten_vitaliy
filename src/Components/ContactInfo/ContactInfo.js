import React from 'react';
import Button from "../UI/Button/Button";
import './ContactInfo.css';

const ContactInfo = ({contact,onCancel, onEdit}) => {
    return (
        <>
            <h3>Данные контакта</h3>
            <p className="InfoImg"><img src={contact.photo} alt="avatar" className="InfoImg"/></p>
            <p className="InfoP">Имя</p>
            <p className="InfoPD">{contact.name}</p>
            <p className="InfoP">Номер</p>
            <p className="InfoPD">{contact.phone}</p>
            <p className="InfoP">Email</p>
            <p className="InfoPD">{contact.email}</p>
            <Button type="Danger" onClick={onCancel}>Cancel</Button>
            <Button type="Success" onClick={() => onEdit(contact.id)}>Edit</Button>
        </>
    );
};

export default ContactInfo;