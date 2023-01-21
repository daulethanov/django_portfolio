import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const {username, password} = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
    };
    return(
        <div className='container mt-5'>
            <h1>Login</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='username'
                        name='username'
                        value={username}
                        onChange={e=> onChange(e)}
                    />
                </div>
                <div className='form-group'>
                     <input
                        className='form-control'
                        type='password'
                        placeholder='password'
                        name='password'
                        value={password}
                        onChange={e=> onChange(e)}
                        required
                        minLength='6'
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            <p className='mt-3'>
                Если нету аккаунта? <Link to='/signup'> SignUp </Link>
            </p>
            <p className='mt-3'>
                Забыли пароль? <Link to='/reset-password'>Reset Password </Link>
            </p>
        </div>
    );
};

// const mapStateProps = state => ({
//
// });

export default connect(null, {}) (Login);