import React,{useState,useEffect} from 'react'
import Styles from '../Styles/Sponsored.module.css'

/* Images for the page */
import Elsabeth from '../assets/Elsabeth2.png'
import Haimanot from '../assets/Haimanot.png'
import pointer from '../assets/pointer.png'

export default function Sponsored() {

const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769); 
    };

    handleResize(); 
    // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    <div className={Styles.container}>
    <section className={Styles.sponsored}>
        <h1>
        <span>Sponsored </span><br/>
        Students
        </h1>

        <p>
        Destiny Future Academy was founded on one couple’s vision to empower Ethiopian children to reach their full potential. Dedicated to providing quality education to underprivileged children, academic years.
        </p>

        <br/>

        <p>
        As we celebrate our 20th anniversary, we invite our partners to reflect on this incredible journey with us. Join us today in investing in the future and shaping the next generation of leaders.
        </p>

        </section>


        <section className={Styles.schooling}>
        <h3>
        Child Schooling Sponsorship 
        Program
        </h3>
        <p>
        The Sponsorship Program provides an opportunity to support a child’s education in the Gofa area of Addis Ababa. Through this vision, Destiny Academy creates a direct and lasting impact on students’ lives. Over the years, we have sponsored hundreds of students, guiding them from their early days in kindergarten through college and university.
        </p>
        <br/>
        <p>   
        Destiny Academy offers education from kindergarten to Grade 8, but our support doesn’t stop there. Sponsored students receive funding to attend private high schools, universities, or technical and vocational schools, depending on their academic goals and career aspirations.
        </p>
        <br/>
        <p>
        One of the greatest achievements of the program is seeing our students thrive. Many have graduated from universities and pursued careers as teachers, pharmacists, office administrators, and more—making a meaningful impact in their communities.
        Here is the story of one of Destiny’s sponsored students Hamanot and Elisabeth, our school nurse

        </p>
    </section>


    <section className={Styles.Haimanot}>
        <h2>
            Haimanot's Story
        </h2>

        <div className={Styles.Haimanot_container}>

        <div className={Styles.image}>
            <img src={Haimanot} alt="Haimanot pictur" />
        </div>

        <div className={Styles.Haimanot_text}>
            
            <p>
                Haimanot Hagos is a dedicated teacher at an international school in Addis Ababa. Her career began as a math teacher at Destiny where she grew up, and she continues to build her path as a committed educator in the international school system. Her journey has been profoundly shaped by her education at Destiny Academy, which helped her discover her true self, purpose, values, and the importance of open-mindedness. She believes that Destiny, true to its name, represents a path where our future is shaped by both our choices and circumstances.
            </p>
            <br/>
            <p>
                
            Throughout her life, she has been fortunate to receive love, care, and guidance from her teachers, which have provided her with long-term stability. She recognizes that access to quality education, including school tuition and essential resources, is a privilege not available to all. These opportunities have inspired her to strive for academic excellence and personal growth.
            </p>
            <br/>
            <p>  
            What sets Destiny Academy apart for her is its deep-rooted sense of family. Even after completing her education, the support system remains intact. Her teachers and school director, Haregewoin Geresu, continue to check in on her, offering guidance and encouragement. This ongoing support is not just a momentary gesture but a lifelong connection that has played a vital role in shaping her journey.
            </p>
            <br/>
            <p>
            Haimanot Hagos is a dedicated teacher at an international school in Addis Ababa. Her career began as a math teacher at Destiny where she grew up, and she continues to build her path as a committed educator in the international school system. Her journey has been profoundly shaped by her education at Destiny Academy, which helped her discover her true self, purpose, values, and the importance of open-mindedness. She believes that Destiny, true to its name, represents a path where our future is shaped by both our choices and circumstances.
            </p>
            <br/>
            <p>
            Throughout her life, she has been fortunate to receive love, care, and guidance from her teachers, which have provided her with long-term stability. She recognizes that access to quality education, including school tuition and essential resources, is a privilege not available to all. These opportunities have inspired her to strive for academic excellence and personal growth.
            </p>
            <br/>
            <p>
            What sets Destiny Academy apart for her is its deep-rooted sense of family. Even after completing her education, the support system remains intact. Her teachers and school director, Haregewoin Geresu, continue to check in on her, offering guidance and encouragement. This ongoing support is not just a momentary gesture but a lifelong connection that has played a vital role in shaping her journey.
            </p>
            

        </div>
    </div>

    <div className={Styles.supporting}>
        <p>
        Haimanot’s journey is just one of many stories of hope and transformation made possible through the generosity of sponsors. There are still countless children in need of the same opportunity—to learn, grow, and build a future full of promise. With just $500 a year, you can change a child’s life by providing access to quality education, nurturing support, and the chance to break the cycle of poverty. Your kindness can shape not only their future but also the future of their families and communities. If you feel moved to be part of this mission, we invite you to join us in giving these children the gift of education and a brighter tomorrow
        </p>
        
        <h5>
            Click the link below to support us
            PS. Please choose "Destiny School" from the dropdown so that we know that the donation was intended for our school.
        </h5>  
        
        <a href="https://www.missionwaychurch.org/giving" target="__blank">
            <div className={Styles.img_container}>
                <img src={pointer} alt="pointer" />
            </div>
            <p className={Styles.support}>Click Here to Support Us</p>
        </a>

    </div>
        
    </section>

    <section className={Styles.Elsabeth}>

        {isMobile ? (
        <>

         <h2>
             Elsabeth: The Heartfelt Mom 
             of Destiny
        </h2>

        <div className={Styles.Elsabeth_container}>
                    
        <div className={Styles.Elsabeth_text}>
        <p>
        For 11 years, Elsabeth Lisanework has been the unwavering pillar of Destiny, serving as both a social worker and a nurse. To her, this was never just a job—it was a divine calling, a purpose greater than herself. Every task she undertook was an act of service, a way to uplift others and glorify God.
        As the guardian of Destiny’s sponsored students, Elsabeth ensures their well-being, listens to their concerns, reaches out to families, and oversees community engagement with deep care and dedication. To her, Destiny is more than a school—it is a family, one that should never be divided. She has devoted herself to nurturing this family, helping each child and parent not only endure but thrive.
        With a heart full of gratitude, she prays for the strength to continue her mission, standing proud of the loving and supportive community she has helped build.
        </p>
        </div>

        <div className={Styles.image2}>
            <img src={Elsabeth} alt="Elsabeth picture"/>
        </div>

        </div>

        </>

        ):(

        <div className={Styles.Elsabeth_container}>
            
            <div className={Styles.Elsabeth_text}>

            <h2>
            Elsabeth: The Heartfelt Mom 
            of Destiny
            </h2>
            <p>
            For 11 years, Elsabeth Lisanework has been the unwavering pillar of Destiny, serving as both a social worker and a nurse. To her, this was never just a job—it was a divine calling, a purpose greater than herself. Every task she undertook was an act of service, a way to uplift others and glorify God.
            As the guardian of Destiny’s sponsored students, Elsabeth ensures their well-being, listens to their concerns, reaches out to families, and oversees community engagement with deep care and dedication. To her, Destiny is more than a school—it is a family, one that should never be divided. She has devoted herself to nurturing this family, helping each child and parent not only endure but thrive.
            With a heart full of gratitude, she prays for the strength to continue her mission, standing proud of the loving and supportive community she has helped build.
            </p>
            </div>
    
            <div className={Styles.image2}>
                <img src={Elsabeth} alt="Elsabeth picture"/>
            </div>
    
            </div>

        )}

       
    </section>

    </div>
  )
}
