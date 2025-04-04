import './footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { Link } from 'react-router-dom'



function Footer() {
    return(
        <div>
        <div className='footer'>
            <h1 className='text'>Mealmaster</h1>
            <p>Mealmaster, launched in January 2025, is a revolutionary service dedicated to promoting healthy eating habits. By offering personalized meal plans and detailed descriptions of nutritious foods, Mealmaster empowers individuals to make informed dietary choices that seamlessly integrate into their daily routines, enhancing both health and culinary enjoyment.</p>
           <div className='icon'>
           <Link to=''>
            <FaFacebook/>
            </Link>
            <Link to=''>
            <FaInstagram/>
            </Link>
            <Link to=''>
            <FaLinkedin/>
            </Link>
            <Link to=''>
            <FaWhatsapp/>
            </Link>
            <Link to=''>
            <FaTwitter/>
            </Link>
           </div>
            
            <p>&#169; 2025 Crytotec. All rights reserved</p>
         </div>
            </div>           
                  

    )
}
 export default Footer