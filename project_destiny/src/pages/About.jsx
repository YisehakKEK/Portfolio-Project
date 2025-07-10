import React, {useEffect} from 'react'
import Styles from '../Styles/about.module.css'
import hugging from '../assets/hugging.png'
import point from '../assets/pointer.png'
import { useNavigate } from "react-router-dom";


export default function About() {

  const navigate = useNavigate();

  return (
    <div className={Styles.container}>
      
      <div className={Styles.hero}>

        <div className={Styles.commitment}>
            <h1 className='commitmenttext'>
            Our Commitment to <span>Special Needs</span> Education
            </h1>
            
            <p>
            At Destiny Future Academy, we are dedicated to providing high-quality, inclusive education for all children, including those with diverse learning needs. We understand the unique challenges faced by students with special needs and are committed to creating a supportive and nurturing environment where they can thrive.
            </p>
        </div>

        <div className={Styles.imgcontainer}>
            <img src={hugging} alt="hugging picture" />
        </div>
      </div>

     {/*  Our Approches */}

      <div className={Styles.approch}>
        <h3>Our <span>Approch</span></h3>
        <p>We offer a comprehensive range of programs and services to support children with:</p>
        <ul>
            <li>Autism Spectrum Disorder (ASD)</li>
            <li>Intellectual Disabilities</li>
            <li>Learning Disabilities</li>
            <li>Down Syndrome</li>
            <li>Speech and Language Delays</li>
            <li>Other Developmental Disabilities</li>
        </ul>
      </div>


      <div className={Styles.services}>
      <h2>
          Key <span>Services</span>
        </h2>

        <h3>Comprehensive Assessments</h3>
        <p>
          We conduct thorough evaluations—including educational, psychological,
          and developmental assessments—to identify each child's unique learning
          needs and develop personalized support plans.
        </p>

        <h3>Individualized Education Plans (IEPs)</h3>
        <p className={Styles.p}>
          We collaborate with families, educators, and therapists to create
          tailored IEPs that outline specific interventions.
        </p>

        <h3>Specialized Instruction</h3>
        <p>
          Our highly qualified team provides targeted support in key areas, including:
        </p>
        <ul>
          <li>
            <strong>Speech and Language Therapy</strong> – Enhancing
            articulation, fluency, comprehension, and social communication.
          </li>
          <li>
            <strong>Occupational Therapy</strong> – Developing motor skills,
            sensory processing, and daily living skills.
          </li>
          <li>
            <strong>Behavioral Intervention</strong> – Addressing challenging
            behaviors and fostering positive social-emotional development.
          </li>
          <li>
            <strong>Academic Skill Development</strong> – Providing targeted
            instruction in reading, writing, mathematics, and other core
            subjects.
          </li>
        </ul>

        <h3>Inclusive Practices</h3>
        <p>
          We believe in the power of inclusion and strive to integrate students
          with special needs into general education settings whenever possible,
          fostering social interactions and a sense of belonging.
        </p>
      </div>

      <div className={Styles.team}>
        <h2>
          Our <span>Team</span>
        </h2>
        <p className={Styles.intro}>Our dedicated team includes:</p>
        <ul>
          <li>
            <strong>Special Education Professionals</strong> – Experts in
            working with students with diverse learning needs.
          </li>
          <li>
            <strong>Licensed Therapists</strong> – Speech-language pathologists,
            occupational therapists, and behavioral specialists.
          </li>
          <li>
            <strong>Paraprofessionals</strong> – Providing individualized
            support and guidance.
          </li>
          <li>
            <strong>Support Staff</strong> – Including educational assistants,
            counselors, and school psychologists.
          </li>
        </ul>

        <p className={Styles.mission}>
          At Destiny Future Academy, we are committed to ensuring that every
          child—regardless of their learning needs—receives the education and
          support they deserve. Your partnership can make a profound difference
          in the lives of students with special needs, empowering them to reach
          their full potential.
        </p>

        <div className={Styles.callToAction} onClick={() => navigate("/Donations")}>
            <div className={Styles.pointer}>
                <img src={point} alt="pointer"/>
            </div>
            
            <div className={Styles.join}>
                <p><strong>Join us in making a lasting impact</strong></p>
                <p>Explore how you can contribute, collaborate,or invest in the future of inclusive education.</p>
            </div>
            
        </div>
      </div>
    </div>
  )
}
