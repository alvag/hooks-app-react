import React, { useEffect, useState } from 'react';
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('init');
    }, []);

    useEffect(() => {
        // console.log('formState cambió');
    }, [formState]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <Form>
            <h1>useEffect</h1>

            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Name" autoComplete="off"
                    value={name} onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="Email" autoComplete="off"
                    value={email} onChange={handleInputChange} />
            </div>

            {name && <Message />}
        </>
    )
}