import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Styles from '../Styles/home.module.css'
import smiling from '../assets/smiling.png'
import point from '../assets/pointer.png' 
import group_pic from '../assets/group_pic.png'
import mission from '../assets/mission.png'
import vision from '../assets/vision.png'

/* Images for the cards */

import card1 from '../assets/card-img/card1.png'
import card2 from '../assets/card-img/card2.png'
import card3 from '../assets/card-img/card3.png'
import card4 from '../assets/card-img/card4.png'
import card5 from '../assets/card-img/card5.png'
import card6 from '../assets/card-img/card6.png'
import card7 from '../assets/card-img/card7.png'
import card8 from '../assets/card-img/card8.png'
import card9 from '../assets/card-img/card9.png'

/* Inverted images for the card */

import character from '../assets/card-img/card8_inv.png'
import creativity from '../assets/card-img/card6_inv.png'
import diligence from '../assets/card-img/card7_inv.png'
import excellence from '../assets/card-img/card4_inv.png'
import integrity from '../assets/card-img/card3_inv.png'
import love from '../assets/card-img/Love and Care.png'
import open from '../assets/card-img/card2_inv.png'
import respect from '../assets/card-img/card5_inv.png'
import stewardship from '../assets/card-img/card9_inv.png'



/* Employees images */

import Aklilu from '../assets/Employees/Aklilu.png'
import Elias from '../assets/Employees/Elias.png'
import Haregewoin from '../assets/Employees/Haregewoin.png'
import Mekdes from '../assets/Employees/Mekdes.png'
import Meseret from '../assets/Employees/Meseret.png'
import Mulu from '../assets/Employees/Mulu.png'
import Elsabeth from '../assets/Employees/Elsabeth2.png'



export default function Home() {

  const [student, setStudent] = useState(0);
  const [sponsore, setSponsore] = useState(0);
  const [workers, setWorker] = useState(0);
  
  const [hoveredId, setHoveredId] = useState(null);

  // Helper function to format numbers into "k" notation
  const formatNumberStud = (num) => {
    return num == 12000 ? `${(num / 1000).toFixed(0)}K` : num;
  };
  const formatNumber = (num) => {
    return num >= 1000 ? `${(num / 1000).toFixed(0)}K` : num;
  };

  // Function to increment numbers
  const incrementValueStud = (setter, max) => {
    const intervalId = setInterval(() => {
      setter((prev) => {
        if (prev < max) {
          return prev + 10;
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, 1); 
  };

  const incrementValuework = (setter, max) => {
    const intervalId = setInterval(() => {
      setter((prev) => {
        if (prev < max) {
          return prev + 8;
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, 50); 
  };

  const incrementValueVol = (setter, max) => {
    const intervalId = setInterval(() => {
      setter((prev) => {
        if (prev < max) {
          return prev + 10;
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, 100); 
  };


useEffect(() => {
    const timeout = setTimeout(() => {
      incrementValueStud(setStudent, 12000);
      incrementValuework(setWorker, 112);
      incrementValueVol(setSponsore, 20);
    }, 1500); 
  
    return () => clearTimeout(timeout);
  }, []);





  const cards= [
    {
      id:1,
      image:card1,
      hover:love,
      title:'Love and Care',
      description:'Treat others with kindness and respect, as you would want for yourself.',
    },
  
    {
      id:2,
      image:card2,
      hover:open,
      title:'Open Mindedness',
      description:'Embrace the opportunity to understand diverse perspectives and ideas.',
  
    },
  
    {
      id:3,
      image:card3,
      hover:integrity,
      title:'Integrity',
      description:'Uphold your values and act with honesty in all situations.',
  
    },
  
    {
      id:4,
      image:card4,
      hover:excellence,
      title:'Excellence',
      description:'Strive for the highest standards, never settling for just good enough.',
  
    },
  
    {
      id:5,
      image:card5,
      hover:respect,
      title:'Respect',
      description:'Value yourself and others for their inherent worth and dignity.',
  
    },
  
    {
      id:6,
      image:card6,
      hover:creativity,
      title:'Creativity',
      description:'Think outside the box and embrace new ideas for growth.',
  
    },
  
    {
      id:7,
      image:card7,
      hover:diligence,
      title:' Diligence',
      description:'Commit fully and give your best in all tasks and responsibilities.',
  
    },
  
    {
      id:8,
      image:card8,
      hover:character,
      title:'Character Based education',
      description:'Focus on developing strong character alongside academic knowledge.',
  
    },
  
    {
      id:9,
      image:card9,
      hover:stewardship,
      title:' Stewardship',
      description:'Honor your Godly responsibilities with care and accountability',
  
    },
  ]


  const Employees=[
    {
      id:1,
      image:Haregewoin,
      name:'Haregewoin Geresu',
      position:'CEO/Founder',
    },
    {
      id:2,
      image:Elias,
      name:'Elias Gudeta',
      position:'ICT specialist and Assistant Manager',
    },

    {
      id:3,
      image:Meseret,
      name:'Meseret Mulalem',
      position:'Principal',
    },

    {
      id:4,
      image:Mulu,
      name:'Mulu Ketema',
      position:'KG Principal',
    },

    {
      id:5,
      image:Aklilu,
      name:'Aklilu Mandefro',
      position:'Academic Director',
    },

    {
      id:6,
      image:Mekdes,
      name:'Mekdes Binyam',
      position:'Human Resource and Resource Manager',
    },
    {
      id:7,
      image:Elsabeth,
      name:'Elsabeth Lisanework',
      position:"Nurse and Social Worker"
    }
  ]


  return (
    <div className={Styles.container}>
      

      <section className={Styles.hero}>

        <div className={Styles.heroinfo}>

          <p className = 'hero_par'>A Call to Invest in the Future</p>
          <h1 className = 'hero_par' >Destiny Future Academy Celebrates 20 Years of Excellence</h1>

          <div className={Styles.numbers}>

            <div className={`${Styles.students} num`}>
                <h5>{formatNumberStud(student)}+</h5>
                <p>Students Served</p>
            </div>

            <div className={`${Styles.volunteers} num`}>
              <h5>{formatNumber(workers)}</h5>
              <p>Employees</p>
            </div>

            <div className={`${Styles.sponsors} num`}>
              <h5>{formatNumber(sponsore)}</h5>
              <p>Years of Experience</p>
            </div>

          </div>
        </div>

        <div className={Styles.heroimg}>
          <img src={smiling} alt="A chiled smiling" />
        </div>
      </section>


      <section className={Styles.calltoaction}>
          <div className={Styles.action_container}>

            <div className={Styles.item}>
              <img src={point} alt="pointer" />
              <p>
              This year marks a monumental milestone for Destiny Future Academy as we celebrate our 20th anniversary! For two decades, our school has been a beacon of hope and opportunity, shaping young minds and making a lasting impact on the Gofa community in Addis Ababa.
              </p>
            </div>

            <div className={Styles.item}>
            <img src={point} alt="pointer" />
            <p>
            To honor this incredible journey, we invite everyone—students, parents, alumni, and community members—to join us in celebrating not just our victories but also the stories of perseverance and growth that have defined us.
            </p>
            </div>

            <div className={Styles.item}>
            <img src={point} alt="pointer" />
            <p>
            As we reflect on our past achievements, we look forward to an even brighter future. The 20th anniversary is more than a celebration; it’s a call to action. It’s time to give back, invest in our school, and help build a foundation for the next 30 years of excellence. Together, we can ensure that Destiny Future Academy continues to transform lives and inspire generations to come.
            </p>
            </div>

          </div>
      </section>

      <section className={Styles.welcome}>

        <div className={Styles.welcome_container}>

          <div className={Styles.welcome_img}>
            <img src={group_pic} alt="group pic" />
          </div>
          <div className={Styles.welcome_info}>
            <h2>Welcome to <span>Destiny</span> Future Academy</h2>
            <p>
            Located in the heart of the Gofa area in Addis Ababa, Destiny Future Academy has been a cornerstone of educational excellence and community service for years. With a vibrant student body of 850 learners from kindergarten to grade 8, we are committed to nurturing the next generation of leaders.
            </p>
            <p>
            At Destiny, we strive to create a safe, inclusive, and inspiring environment where students excel academically and develop the values and love of God and their community. Join us on this journey of shaping bright futures and positively impacting our community!

            </p>
          </div>
        </div>

      </section>

      <section className={Styles.goals}>
        <div className={Styles.grid}>

          <div className={Styles.grid_item1}>
              <div className={Styles.header}>
                <img src={mission} alt="our mission" />
                <h1>
                  Our<br/>mission
                </h1>
              </div>
              <p>
              To provide quality-holistic education and develop character transformation and improve opportunities for all.
              </p>
          </div>


          <div className={Styles.grid_item2}>

              <div className={Styles.header}>
                <img src={vision} alt="our vision" />
                <h1>Our<br/>vision</h1>
              </div>
              <p>
              Become the best center of education, where students pursue their purpose they are created for to make a difference in their community.
              </p>
          </div>


        </div>
      </section>

      <section>
          <h1 className={Styles.core}>Core Values</h1>
        <div className={Styles.big_grid}>

          {cards.map((card,index)=>(
              <div className={Styles.big_grid_item}
              key={index}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: hoveredId === card.id ? "#FA6207" : "transparent",
                color: hoveredId === card.id ? "white" : "black",
                zIndex: hoveredId === card.id ? 10 : 1,
                position: "relative", 
                transform: hoveredId === card.id ? "scale(1.05)" : "scale(1)",
                transition: "background 0.4s ease-in-out, color 0.4s ease-in-out, transform 0.4s ease-in-out",
              }}
               >
              <img
            src={card.image}
            alt={card.title}
            className={hoveredId === card.id ? Styles.fade_out : ""}
              />
            <img
            src={card.hover}
            alt={card.title}
            className={hoveredId === card.id ?  Styles.fade_in : Styles.fade_out}
              />

              <h3>
                {card.title}
              </h3>
              <p>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={Styles.learn_more}>

        <div className={Styles.text}>
        <h1>
        Our<span> Team</span>
        </h1>
        <p>
        Destiny is led by a team of passionate individuals committed to making a difference. With expertise, dedication, and heart, we work together to create meaningful change and transform lives.
        </p>
        </div>

        <div className={Styles.employeeGrid}>

          {Employees.map((employee,index)=>(
              <div 
              className={`${Styles.employee} ${employee.id === 7 ? Styles.specialPosition : ""}`}
              key={index}
               >

              <div className={Styles.employeeimg}>
                <img 
                src={employee.image} alt={employee.name}
                style={{
                  scale: employee.id === 6 ? "1.25" : "",
                }}
                
                
                />
              </div>
              
              <h6>{employee.name}</h6>
              <p>{employee.position}</p>
    
              </div>
          ))}

      </div>   

      <div className={Styles.text2}>
        <h1>
        Our <span> Initiatives</span>
        </h1>
        <p>
        We’re a school serving some of the most vulnerable children in Addis Ababa, Ethiopia, giving them the education and support they deserve. We want to help break the cycle of poverty by empowering these kids to dream big and reach their full potential.
        </p>

        <p className={Styles.click}>Click here to learn more about the initiatives that are changing lives.</p>
        <Link to='/Initiatives'>
          <button>Learn More</button>
        </Link>

        </div>

      </section>
        
    </div>
  )
}
