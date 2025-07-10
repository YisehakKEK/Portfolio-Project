import React,{ useEffect } from "react";
import Styles from '../Styles/donation.module.css'
import pointer from '../assets/pointer2.png'
import orange_child from '../assets/orange_child.png';
import block from '../assets/block.png'
import point from '../assets/pointer.png'
import {Link} from 'react-router-dom'

export default function Donation() {

    useEffect(() => {
        document.body.style.backgroundImage = `url(${orange_child})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.color = 'white';
        document.querySelector("nav").style.color = "white";
        
        return () => {
          document.body.style.backgroundImage = ""; 
          document.body.style.color = "";
          document.querySelector("nav").style.color = "";
         /*  document.querySelector("line").style,color = ""; */
        };
      }, []);

  return (
    
      <section className={Styles.container}>

        <div className={Styles.future}>

          <h1>SUPPORT OUR <br/><strong>FUTURE</strong></h1>
          <p>Your support fuels Destiny’s mission to uplift communities, empower individuals, and create lasting change. Every donation—big or small—helps provide education, resources, and opportunities to those who need them most.
          </p>
        </div>

        <div className={Styles.explanation}>
          <p>
          Currently, we are asking that financial contributions be given through MissionWay Church in Jacksonville, Florida. MissionWay has been a strong partner with us for over 15 years and they are assisting us in collecting donations at this time. The link below will take you to their website where you can make a donation and select “Destiny School” in the dropdown menu. Once you select the amount you are giving, you will be taken to another page where you can specify what you are giving towards (e.g. sponsoring a student, building fund, or community engagement).
          <br/>
          <br/>
          
          For further inquiries, feel free to contact Pastor Kenny Roberts from MissionWay Chruch at<br/>
          <span className={Styles.explain_span}>
          <strong>
          kennyroberts@missionwaychurch.org
          </strong>
          
          </span>
          
          </p>
        </div>

        <div className={Styles.projects}>
          <h2>Recurring projects</h2>
          <img src={block} alt="block" className={Styles.block} />
          <p>
          We are deeply grateful for any support that helps us sustain our ongoing projects and essential expenses. One of our heartfelt missions is to sponsor students, giving them the opportunity to receive a quality education, access learning materials, and receive the support they need to thrive. Over the years we sponsored hunderes students from Kindergarten all the way to colleges.
          Another significant need is Community engagement programs, which allows us to effectively coordinate our activities and serve our community. We truly depend on continuous funding to carry out these initiatives and make a meaningful, lasting difference.

          </p>

          <div className={Styles.link_holder}>
          <div className={Styles.callToAction1}>
              <img src={pointer} alt="pointer" />
              <Link to='/sponsor'>
              <p>Learn More About the Sponsored Students </p>
              </Link>   
          </div>

          <div className={Styles.callToAction1}>
              <img src={pointer} alt="pointer" />
              <Link to='/commitment'>
              <p>Learn More About Our Community Initiatives</p>
              </Link>   
          </div>
          </div>

          

          <h5>Click the link below to support us
          PS. Please choose "Destiny School" from the dropdown so that we know that the donation was intended for our school.
          </h5>  

          <a href="https://www.missionwaychurch.org/giving" target="__blank">
            <div className={Styles.img_container}>
              <img src={pointer} alt="pointer" />
            </div>
            <p className={Styles.support}>Click Here to Support Us</p>
          </a>
          
        </div>

        <div className={Styles.onetime}>
          <h2>One time projects</h2>
          <img src={block} alt="block" className={Styles.block} />
          <p>
          From time to time, we take on special projects that require one-time funding, and we are always deeply appreciative of any contributions that make them possible. These projects include much-needed building developments and renovations, ensuring that we create and maintain spaces that best support our work. We also seek funding for essential equipment and supplies, which help us operate more efficiently and serve our community better. These one-time investments are incredibly valuable in strengthening our capacity and expanding the impact of our efforts.
          </p>

          <div className={Styles.callToAction}>
              <img src={pointer} alt="pointer" />
              <Link to='/one-time-projects'>
              <p>Learn More</p>
              </Link>   
          </div>

          <h5>Click the link below to support us
          PS. Please choose "Destiny School" from the dropdown so that we know that the donation was intended for our school.
          </h5>  

          <a href="https://www.missionwaychurch.org/giving" target="__blank">

          <div className={Styles.img_container2}>
            <img src={pointer} alt="pointer" />
          </div>
          <p className={Styles.support}>Click Here to Support Us</p>

          </a>
  
                  
        </div>

        <div className={Styles.prayer}>
          <h2>Prayer lists</h2>
          <img src={block} alt="block" className={Styles.block} />

          <p className={Styles.power_of_prayer}>
          We believe in the power of prayer to strengthen our mission and guide our work. We invite you to stand with us in faith as we seek wisdom, provision, and impact in all that we do
          </p>

          <p><strong>Pray for Our Mission</strong> – That we may continue to serve and uplift communities with purpose and passion.</p>
          <p><strong>Pray for Our Team </strong>– For strength, wisdom, and unity as we carry out this work</p>
          <p><strong>Pray for Those We Serve</strong> – That lives may be transformed through hope, education, and opportunity.</p>

          <p className={Styles.your_prayer}>Your prayers uplift and sustain us. Thank you for standing with us in faith!</p>

          <div className={Styles.img_container}>
            <img src={pointer} alt="pointer" />
          </div>

        </div>
      </section>
  )
}
