import vk from '../../image/icons/vk.svg'
import instagram from '../../image/icons/instagram.svg'
import linkedIn from '../../image/icons/linkedIn.svg'
import github from '../../image/icons/gitHub.svg'

const Footer = () =>{
    return(
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item">
                        <a href="#!"><img src={github} alt=""/></a>
                    </li>
                    <li className="social__item">
                        <a href="#!"><img src={vk} alt=""/></a>
                    </li>
                    <li className="social__item">
                        <a href="#!"><img src={linkedIn} alt=""/></a>
                    </li>
                    <li className="social__item">
                        <a href="#!"><img src={instagram} alt=""/></a>
                    </li>
                </ul>
                <div className="copyright">
                    <p>© 2022 Freelancer.Tut</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;