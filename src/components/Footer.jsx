import '../css/Footer.css'
import imagen1 from '../assets/cil_house.png'
import imagenT from '../assets/twitter.png'
import imagenF from '../assets/facebook.png'
import imagenI from '../assets/instagram.png'
import imagenW from '../assets/what.png'

const Footer = () => {
    return(
        <footer>
            <div className="contenedorFo">
                <img className='imagenC' src={imagen1} alt=''></img>
                <p className='textoF'>It is a long established fact that a reader will be distracted by the readable content of a page whenters.</p>
                <img className='twitter ' src={imagenT} alt=''></img>
                <div className='twitterC'></div>
                <img className='face ' src={imagenF} alt=''></img>
                <div className='faceC'></div>
                <img className='insta ' src={imagenI} alt=''></img>
                <div className='instaC'></div>
                <h2 className='t2'>About Us</h2>
                <h3 className='t3'>About</h3>
                <h3 className='t4'>Privacy & Policy</h3>
                <h3 className='t5'>Terms & Conditions</h3>
                <h3 className='t6'>Faq</h3>

                <h2 className='t7'>Navigate</h2>
                <h3 className='t8'>How We Work</h3>
                <h3 className='t9'>Services</h3>
                <h3 className='t10'>Faq</h3>
                <h3 className='t11'>Contact</h3>
                <h3 className='t12'>Free Quote</h3>

                <h2 className='t13'>Contact Us</h2>
                <h3 className='t14'>Ricardo Margain 444</h3>
                <h3 className='t15'>Call: +52 81 1234 5678</h3>
                <h3 className='t16'>Email: info@challenge.com</h3>

                <div className='nose'></div>
                <img className='what' src={imagenW} alt=''></img>
            </div>
        </footer>
    )
}

export default Footer;