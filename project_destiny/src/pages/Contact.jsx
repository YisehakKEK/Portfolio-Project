import React,{useEffect} from 'react'
import Styles from '../Styles/contact.module.css'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import Ln from '../assets/Ln.png'
import facebook from '../assets/facebook.png'
import Haregewoin from '../assets/0.png'

/* Website Animations */
import {Left} from '../componenets/Animations/left.jsx'
import {Bottom} from '../componenets/Animations/bottom.jsx'
import {Right} from '../componenets/Animations/right.jsx'


export default function Contact() {

  useEffect(() => {
    Bottom(Styles.container)
    Left(Styles.contactimg)
    Right('info')

    Left(Styles.ceoimg)
    Right('ceo_info')
  }, []);

  return (
    <div className={Styles.containerall}>

      <section className={Styles.contactgrid}>

        <div className={Styles.container}>

            <div className={Styles.contactimg}>
                <img src={phone} alt="phone" />
            </div>

            <div className={Styles.contactinfo}>
                <h4 className='info'>Phone number</h4>
                <p className='info'>011 416 0107</p>
            </div>
        </div>

        <a href="https://web.facebook.com/DestinyAcademyEthiopia" target='__blank' className={Styles.a}>
        <div className={Styles.container}>

        <div className={Styles.contactimg}>
                <img src={facebook} alt="facebook" />
        </div>
            
        <div className={Styles.contactinfo}>
            <h4 className='info'>Facebook</h4>
            <p className='info'>Destiny Academy</p>
        </div>

        </div>

        </a>
       

        <div className={Styles.container}>

        <div className={Styles.contactimg}>
                <img src={email} alt="email" />
        </div>
            
        <div className={Styles.contactinfo}>
            <h4 className='info'>Email</h4>
            <p className='info'>Contact@destinyfa.com</p>
        </div>

        </div>

        <a href="https://www.linkedin.com/company/destiny-future-academy-et/posts/?feedView=all" target='__blank' className={Styles.a}>
        <div className={Styles.container}>

        <div className={Styles.contactimg}>
            <img src={Ln} alt="LinkedIn" />
        </div>
            
        <div className={Styles.contactinfo}>
            <h4 className='info'>LinkedIn</h4>
            <p className='info'>Destiny Future Academy ET</p>
        </div>

        </div>

        </a>

        

      </section>

      <section className={Styles.ceo}>

        <div className={Styles.ceocontainer}>

        <h2>Get in touch with the CEO</h2>

        <div className = {Styles.ceo_contacts}>

          <div className={Styles.ceoimg}>
            <img src={Haregewoin} alt="Haregewoin" />
          </div>
            
            <div className={Styles.ceo_info}>

                <h4 className='ceo_info'>Haregewoin Geresu</h4>

                <label className='ceo_info'>CEO/Founder</label>

                <p className='ceo_info'>Behind Destiny stands a passionate leader dedicated to transforming lives through education and empowerment. To learn more about the mission, collaborate, or support our cause, reach out today.
                </p>

                <p className='ceo_info'>
                <strong className={Styles.strong}>Hareg@destinyfa.com</strong>
                </p>
                
            </div>
        </div>
        </div>
      </section>

      <section className={Styles.map}>
        <h2>Find us on Google map</h2>
        <div className={Styles.map_container}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.6721901534586!2d38.74506470911282!3d8.97521609686676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85fabb95637d%3A0x3cb0f1d780a286b0!2sDestiny%20Future%20Academy!5e0!3m2!1sen!2set!4v1739012576388!5m2!1sen!2set" 
          className={Styles.responsive_iframe}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        </div>
      </section> 


    </div>
  )
}
