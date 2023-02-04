import '../../style/main.css'
import {NavLink} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {makeApiRequest} from "../../service/auth/login";
import {AuthContext} from "../../state";
import user from '../../image/icons/user.svg'

const Header = () => {
        const { handleLogout } = useContext(AuthContext);

    return(
        <div className="navbar">
            <div className="navbar-row">
            <strong className='navbar__logo'>
                <NavLink to='/' className='navbar__logo-link'>Freelancer.Tut</NavLink>
            </strong>

                <ul className='navbar__list'>
                    <li className='navbar__list-item'>Home</li>
                    <li className='navbar__list-item'>Find work</li>
                    <li className='navbar__list-item'>Find Freelancers</li>
                    <li className='navbar__list-item'>Contacts</li>
                </ul>
                <ul className='navbar__list authentication'>
                    <li className='navbar__list-auth'>
                        <NavLink to='/login' className='navbar__list-link'>Login</NavLink>
                    </li>
                    |
                    <li className='navbar__list-auth'>
                        <NavLink to='/signup' className='navbar__list-link'>SignUp</NavLink>
                    </li>
                    
                    <li className='navbar__list-auth'>
                        <NavLink to='/profile' className='navbar__list-link'><img className='navbar__list-icon' src={user} alt=""/></NavLink>
                    </li>

                    {/*<li >{isAuthenticated ? (*/}
                    {/*    <button onClick={handleLogout}>Logout</button>*/}
                    {/*    ):(<> </>)};*/}

                </ul>
            </div>
        </div>
    )
}

export default Header;