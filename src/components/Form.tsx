import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>E-mail
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>Password
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>

            <button type="submit">Submit</button>
        </form>
    );


}

export default Form;