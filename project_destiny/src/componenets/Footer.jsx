import React from 'react'
import Styles from '../Styles/footer.module.css'
import Logo from '../assets/Logo2.png'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
<div className={Styles.container}>
    <div className={Styles.footer}>
        <div className={Styles.contact_holder}>
        <div className={Styles.logo}>
            <div className={Styles.name}>
                <h2>Destiny Future Academy</h2>
            </div>

            <div className={Styles.img_container}>
                <img src={Logo} alt="destiny logo"  />
            </div>
        </div>

        <div className={Styles.contacts}>
            <h2>Contact us</h2>
            <p>Contact@destinyfa.com</p>
            <p>Addis Ababa, Ethiopia</p>
            <p className={Styles.phone}>011 416 0107</p>
        </div>

        </div>

        <div className={Styles.navigation}>
            <Link to='/'>About us</Link>
            <Link to='/Initiatives'>Initiatives</Link>
            <Link to= '/Donations'>Donation</Link>
            <Link to='/contact'>Contact us</Link>
        </div>

    </div>
       
        <hr className={Styles.divider} />
        <p className={Styles.copyright}>
        All rights reserved &copy; Destiny Future Academy
        </p>

</div>
  )
}
