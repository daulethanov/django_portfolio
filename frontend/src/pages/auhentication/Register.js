import {useState, useEffect, useContext} from "react";
import Header from "../../components /heaeder /Header";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../state";
import axios from "axios";

const Register = ({ onRegister }) => {
    const navigate = useNavigate();

    const { state, register } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");


   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/users/register/", {
        first_name,
        last_name,
        email,
        password,
      });
        navigate('/login');
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

    return(
        <>
            <Header/>
                <div className="auth">
                   <h1 className='auth__title'>Registration Form</h1>
                    <form className='auth__form' onSubmit={handleSubmit}>

                        <input className='auth__form-input'
                               value={first_name}
                               onChange={e => setFirstName(e.target.value)}
                               type="text"
                               placeholder='First name'

                        />
                         <input className='auth__form-input'
                               value={last_name}
                               onChange={e => setLastName(e.target.value)}
                               type="text"
                               placeholder='Last name'
                        />
                         <input className='auth__form-input'
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                               type="email"
                               placeholder='Email'
                               required
                        />
                        <input className='auth__form-input'
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                               type="password"
                               placeholder='Password'/>
                        <button className='btn-auth' type='submit'>SignUp</button>
                    </form>
                    <div className="auth__user-complete">
                        <p className='auth__user-compete-p'>Нажимая кнопку «Зарегистрироваться», я соглашаюсь с Пользовательским соглашением и даю согласие на обработку персональных данных на условиях, определенных «Политикой конфиденциальности» и получение писем от Freelancer.Tut (отписаться можно в любой момент).
                        </p>
                    </div>

                    <div className="auth__auth">
                        <p>Already have an account? <Link to='/login' className='auth__auth-link'>Login</Link>.</p>
                    </div>
                </div>
        </>
    )
}
export default Register;