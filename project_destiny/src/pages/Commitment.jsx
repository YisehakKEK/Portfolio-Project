import React from 'react'
import Styles from '../Styles/commitment.module.css'
import pointer from '../assets/pointer.png'

/* Flex images */

import daycare from '../assets/daycare.png'
import charity from '../assets/charity.png'
import charity2 from '../assets/charity2.png'

export default function Commitment() {
  return (
    <div className={Styles.container}>

        <div className={Styles.community}>
        <h1>
            Our Commitment 
            to the <span>Community</span>
        </h1>

        <p>
        In recent years, our involvement in assisting families with food distribution has had a significant impact. This program has not only provided support to hundreds of families but has also created opportunities for sharing the good news. As we strive to sustain this positive environment, we are now implementing a community development program within the community.

        </p>

        </div>

        <div className={Styles.letter}>

        <h6>
            Take a look at how our last community event took place
        </h6>

        <h5>An Opportunity to Share the Reason for Our Love</h5>

        <h4 className={Styles.date}>
        <em>January 2024 Newsletter</em>
        </h4>

        <p>
        Dear Destiny Families,<br/>
        As we reflect on the joyous season that has just passed, we are thrilled to share with you
        the heartwarming success of our Christmas gift-giving program our community. On January 4th and 5th the days filled with hope and smiles, we were privileged to extend our hand of fellowship to 257 families within our community.
        </p>
        <br/>

        <p>
        In January 4th morning was dedicated to house visits by our devoted 'Caring and Sharing' team, who personally reached out to families, bringing not only food item gifts but also the presence of our father. The warmth of these interactions was deep, with families expressing gratitude for the sense of being remembered.
        </p>
        <br/>

        <p>
        In the afternoon, the spirit of giving continued to glow brightly as we gathered with 107 members of the Destiny community. It was a time of true connection and reflection, as the story of Jesus and the message of redemption were shared with clarity and conviction. The engagement was sincere, with families interacting and responding with heartfelt respond.
        </p>
        <br/>
        <p>
        One touching encounter was with a mother—referred to as Zinash (a pseudonym to honor her privacy). She opened her heart to the message of hope and professed Jesus as her savior, requesting prayer and fellowship for the future. This moment was a reminder of the impact of our mission.

        </p>
        <br/>
        <p>
        On the bright morning of January 5th, our second group of our community members came together in a spirited gathering to share in the Word. It was a beautiful occasion filled with fellowship and the heartfelt sharing of the Gospel."
        </p>
        <br/>
        <p>
        As we look back on these special days, it is challenging to encapsulate the full extent of
        the joy of sharing Jesus’ love. The photographs we share in this newsletter offer just a glimpse of the countless beautiful moments.
        </p>
        <br/>
        <p>
        Your support made this possible. It's not just the food item handouts but the opportunity to share love, hope, and a sense of belonging that makes a difference in the lives of many. We extend our deepest thanks for your continued partnership, prayer and love.
        </p>
        <br/>
        <p className={Styles.name}><em>Mrs. Hareg</em></p>

        <div className={Styles.supporting}>
            <p>We are currently helping around 250 families every holiday and it costs only $20 to support one family.</p>

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

        </div>

        <div className={Styles.gallery}>
            <div className={Styles.gallery_item}>
                <img src={daycare} alt="daycare picture" />
            </div>
            <div className={Styles.gallery_item}>
                <img src={charity} alt="helping people picture" />
            </div>
            <div className={Styles.gallery_item}>
                <img src={charity2} alt="helping people picture" />
            </div>
        </div>

    </div>
  )
}
