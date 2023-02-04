import {useContext, useEffect, useState} from 'react'
import Header from "../../components /heaeder /Header";
import {Link, useNavigate} from "react-router-dom";
import {api, login} from "../../service/auth/login";
import {AuthContext, AuthProvider} from "../../state";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const { handleLogin } = useContext(AuthContext);


  const handleSubmit = async (e) => {
      e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;
      axios.post('http://localhost:8000/api/users/login/',
          {email,
              password
          }, {headers:{
             Authorization: `Bearer ${localStorage.getItem('access')}`
              }})

          .then(res => {

              handleLogin(res.data.access);

              navigate('/')
          })
          .catch(error => {
            console.error(error);
        });
  }

    return(
        <>
            <Header/>
                <div className="auth">
                   <h1 className='auth__title'>Authorization Form</h1>

                    <form className='auth__form'
                          onSubmit={handleSubmit}
                    >

                        <input className='auth__form-input'
                               type="email"
                               placeholder='email'
                               name='email'
                               id='email'
                        />
                        <input className='auth__form-input'
                               type="password"
                               placeholder='Password'
                                name='password'
                              id='password'
                        />
                        <button className='btn-auth' type='submit'>
                            Login
                        </button>
                    </form>
                    <div className="auth__auth">
                        <p>Don't have an account? <Link to='/signup' className='auth__auth-link'>SignUp</Link>.</p>
                    </div>
                </div>
        </>
    );
};

export default Login;




