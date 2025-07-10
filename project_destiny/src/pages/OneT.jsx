import React,{useEffect} from 'react'
import Styles from '../Styles/one.module.css'
import block from '../assets/block.png'
import pointer from '../assets/pointer2.png'
import orange_child from '../assets/orange_child.png';

import building1 from '../assets/building1.png'
import building2 from '../assets/building2.png'
import building3 from '../assets/building3.png'

export default function One() {

     useEffect(() => {
            document.body.style.backgroundImage = `url(${orange_child})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "50% 25%";
            document.body.style.color = 'white';
            document.querySelector("nav").style.color = "white";
            
            return () => {
              document.body.style.backgroundImage = ""; 
              document.body.style.color = "";
              document.querySelector("nav").style.color = "";
            };
          }, []);
    

  return (
    <div className={Styles.container}>

      <div className={Styles.projects}>

            <h2>One time projects</h2>
            <img src={block} alt="block" className={Styles.block} />
            <p>School Expansion plan </p>
            <br/>
            <p>
            As part of our expansion plan, we aim to increase student enrollment to 1,500 over the next two years. In the summer of 2024, we acquired land and began constructing classrooms, learning areas, a library, a pedagogical playground, and science labs. 
            </p>
            <br/>
            <p>
            For the 2025/2026 academic year, the new building is planned to accommodate 400 elementary students. To complete the project, we need to finalize the construction of classrooms, a cafeteria, the library, the laboratory, and the pedagogy center.
            </p>
            <br/>
            <p>
            This campus will be fully specially beed inclusive school, designed to meet the needs of special need students. It will feature a speech therapy center, one-on-one learning rooms, and resource rooms. We welcome one-time donations to help create a sustainable learning environment for Destiny Students. We are currently looking to raise 67,000 USD to fully fund and finish the expansion project.
            </p>
            <br/>            
      
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

         <div className={Styles.gallery}>
                    <div className={Styles.gallery_item}>
                        <img src={building1} alt="building 1" />
                    </div>
                    <div className={Styles.gallery_item}>
                        <img src={building2} alt="building2" />
                    </div>
                    <div className={Styles.gallery_item}>
                        <img src={building3} alt="building3" />
                    </div>
                </div>
        
    </div>
  )
}
