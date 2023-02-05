import logo from '../assets/cil_house.png'
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Nav.css'

const Nav = () => {
    return(
        <header className='contenedor'>
        <img className='imagen' src={logo} alt='logo'></img>
        <nav>
            <ul>
                <li className='li-1'>How We Work</li>
                <li className='li-2'>Services</li>
                <li className='li-3'>Free Quote</li>
                <li className='li-4'>Contact</li>
            </ul>
            <label className='icon'>-</label>
        </nav>
        </header>
        // 600 left
    )
}

export default Nav