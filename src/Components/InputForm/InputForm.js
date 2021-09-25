import React from 'react';

const InputForm = props => {
    return (
        <>
            <form onSubmit={props.onSubmit}>
                <label className="AddLabel">
                    Введите Имя
                    <input
                        type="text"
                        className="AddInput"
                        name="name"
                        value={props.contact.name}
                        onChange={props.onChange}
                    />
                </label>
                <label className="AddLabel">
                    Введите номер
                    <input
                        type="number"
                        className="AddInput"
                        name="phone"
                        value={props.contact.phone}
                        onChange={props.onChange}
                    />
                </label>
                <label className="AddLabel">
                    Введите E-mail
                    <input
                        type="email"
                        className="AddInput"
                        name="email"
                        value={props.contact.email}
                        onChange={props.onChange}
                    />
                </label>
                <label className="AddLabel">
                    Введите адрес аватара
                    <input
                        type="url"
                        className="AddInput"
                        name="photo"
                        value={props.contact.photo}
                        onChange={props.onChange}
                    />
                </label>
                <p><img src={props.url} alt="Avatar" className="AddImg"/></p>
                <button type="submit">
                    {props.textButton}
                </button>
            </form>
        </>
    );
};

export default InputForm;