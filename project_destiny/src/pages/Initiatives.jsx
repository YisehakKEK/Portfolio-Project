import React, {useEffect} from 'react'
import Styles from '../Styles/initiative.module.css'
import sponsores from '../assets/sponsers.png'
import special from '../assets/special.png'
import point from '../assets/pointer.png'
import journey from '../assets/journey.png'
import facebook from '../assets/facebook.png'
import Ln from '../assets/Ln.png'
import commitment from '../assets/commitment.png'
import {useNavigate,Link} from 'react-router-dom'

import Testimonial from '../componenets/testimonial.jsx'

/* Website Animations */
import {Left} from '../componenets/Animations/left.jsx'
import {Bottom} from '../componenets/Animations/bottom.jsx'
import {Top} from '../componenets/Animations/top.jsx'
import {Right} from '../componenets/Animations/right.jsx'




export default function Initiatives() {

  return (
    <div className={Styles.container}>
      <section className={Styles.sponsore}>
        <div className={Styles.text}>
            <h1 className='sponsoretext'><span>Sponsored</span> students</h1>
            <p className='sponsoretext'>
            At Destiny, we take this Godly endeavor with the utmost seriousness, believing that every child deserves the gift of education. Over the past decade, we have sponsored over 100 students, guiding them from kindergarten through College. This mission has transformed lives, opening doors to a brighter future for children who otherwise would not have had access to quality education. With the continued support of our generous donors, we aim to significantly increase this number in the coming years, ensuring that even more young minds receive the opportunity to learn, grow, and thrive.
            </p>

            <div className={Styles.callToAction2}>
              <img src={point} alt="pointer" />
              <Link to='/sponsor'>
              <p>Learn More</p>
              </Link>   
            </div>

        </div>
        <div className={Styles.imgcontainer1}>
            <img src={sponsores} alt="sponsores" />
        </div>
      </section>

      <section className={Styles.special}>

        <div className={Styles.imgcontainer2}>
            <img src={special} alt="special" />
        </div>

        <div  className={Styles.text2}>
            <h1 className='specialtext'>
          Our Commitment<br/>
            to <span>Special Needs</span><br/> Education
            </h1>
            <p className='specialtext'>
            At Destiny Future Academy, we are dedicated to providing high-quality, inclusive education for all children, including those with diverse learning needs. We understand the unique challenges faced by students with special needs and are committed to creating a supportive and nurturing environment where they can thrive.

            </p>

            <div className={Styles.callToAction}>
              <img src={point} alt="pointer" />
              <Link to='/special'>
              <p>Learn More</p>
              </Link>   
            </div>

        </div>
      </section>

      <section className={Styles.journey}>
        <div  className={Styles.text}>
            <h1 className='journeytext'>See Their <span>Journey</span></h1>
            <p className='journeytext'>
            Education changes lives, and our students are living proof of that. Through dedication and support, we’ve helped guide them from their first days in kindergarten to the milestones they achieve in 8th grade. Their stories of growth, resilience, and success are truly inspiring. See the kids, their smiles, and their journeys for yourself on our social media!

            </p>
        <div className={Styles.dots}>
           <a href="https://www.linkedin.com/company/destiny-future-academy-et/posts/?feedView=all" target='__blank'>
           <img src={Ln} alt="linkedIn" className='social'/>
           </a> 
           <a href="https://web.facebook.com/DestinyAcademyEthiopia" target='__blank'>
            <img src={facebook} alt="facebook" className='social'/>
           </a>
           
            
            </div>
        </div>
        <div className={Styles.imgcontainer3}>
            <img src={journey} alt="Journey" />
        </div>
      </section>

      <section className={Styles.commitment}>
        <div className={Styles.imgcontainer4}>
            <img src={commitment} alt="commitment" />
        </div>
        <div  className={Styles.text2}>
            <h1 className='commitmenttext'>
            <span>Our Commitment </span><br/>
                  to the Community
            </h1>
            <p className='commitmenttext'>
            Beyond our sponsorship program, we are dedicated to making a lasting impact in our community. From planting trees to organizing community cleanups, we believe in teaching our students the value of care and responsibility. One of our most cherished initiatives is our holiday grocery program, where we provide food essentials to around 200 families, helping them celebrate these special moments with warmth and joy. For us, community is about coming together, supporting one another, and sharing in each other’s happiness.

            </p>

            <div className={Styles.callToAction}>
              <img src={point} alt="pointer" />
              <Link to='/commitment'>
              <p>Learn More</p>
              </Link>   
            </div>
        </div>
      </section>

      <section className={Styles.voices}>
      <h1><span>Voices</span> of impact</h1>
      <p>
      We inspire, nurture, and transform lives. These voices of impact are a testament to the power of learning. Hear from those whose journeys were shaped by our school, and discover the lasting imprint of education beyond the classroom.
      </p>
      </section>


      <Testimonial/>
      
    </div>
  )
}
