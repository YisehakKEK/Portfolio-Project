import React, { useState } from "react";
import Styles from "../Styles/testimonial.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Testimonial() {

  const testimonials = [
    { id: 1, 
      number: "Meheret Zewdu",
      title: "",
      text: "What I learned, enjoyed, and lived in the school, I was not even in college. Thank you for all the memories that I hold so dear in my heart, and as time goes by new ones will form, but the old ones shall never depart." 
    },

    { id: 2,
      number: "Eshkol Tamru ", 
      title: "Grade 7 ",
      text: "I love playing and studying at destiny future academy " 
    },

    { id: 3, 
      number: "Samuel Markos", 
      title:'2 year at St Mary',
      text: " Miss Hargewain's support has made a tremendous difference in our lives. She didn't just provide financial assistance; she also took a personal interest in us. Her kindness and dedication have given us the opportunity to pursue our education and build a brighter future." 
    },
    { id: 4, 
      number: "Adonai Desalegn",
      title:'Grade 1', 
      text: "I love to play and laugh at school." 
    },
    { id: 5, 
      number: "Haimanot Hagos", 
      text: "a dedicated teacher at an international school, credits Destiny for shaping her journey and inspiring her pursuit of excellence. Grateful for her sponsors' support, she remains committed to making a meaningful impact in her community" 
    },
    { id: 6, 
      number: "Haset Niguse", 
      text: "a dedicated 6th grader at Destiny Academy, is grateful for her sponsors' support in shaping her education. Aspiring to be an ophthalmologist, she strives for excellence and hopes to give back to her community" 
    },
  ];

  const [center, setCenter] = useState(0);

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    const [hover, setHover] = useState(false);
    return (
      <div
        className={className}
        style={
          {
            ...style,
            left: "10px",
            zIndex: "10",
            color: "#FA6207",
            opacity: hover ? "1" : "0.5",
            fontSize: "20px", 
            cursor: "pointer",
            transition: "opacity 0.3s ease",
          }
        }
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}

      >
        ◀
      </div>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    const [hover, setHover] = useState(false);
    return (
      <div
        className={className}
        style={
          { 
            ...style,
            right: "15px",
            zIndex: "10",
            color: "#FA6207",
            opacity:hover ? "1" : "0.5",
            fontSize: "20px", 
            cursor: "pointer",
           transition: "opacity 0.3s ease",
          }
        }
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
         ▶
      </div>
    );
  };
 

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad:true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setCenter(next),
    responsive: [
        {
          breakpoint: 769, 
          settings: {
            slidesToShow: 2, 
          },
        },
        {
          breakpoint: 576, 
          settings: {
            slidesToShow: 1, 
          },
        },
      ],
  };

  return (
    <section className={Styles.cards}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${Styles.card} ${center === index ? Styles["center-slide"] : ""}`}
          >
            <h4>{testimonial.number}</h4>
            <p>{testimonial.title}</p>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}
