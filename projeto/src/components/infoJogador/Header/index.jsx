import { Link, NavLink } from 'react-router-dom'
import './style.css'
import logo from '../../../assets/logo.png'


export default function Header () {
    return(
        <header>
            <div>
                <Link to="/">
                    <img src={logo}alt="logo de contabilidade"/>
                    <span>contabilidade simples</span>
                </Link>

                <nav>
                    <NavLink to="sobre-nos">sobre nós</NavLink>
                    <NavLink to="fale-conosco">fale conosco</NavLink>
                </nav>
            </div>
        </header>
    )
}