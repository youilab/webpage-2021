import React, { useEffect, useState } from "react";
import {team} from '../data/team'
import { Modal } from "./Modal";

export const About = () => {

    const [modal, setModal] = useState(false)
    const [profile, setProfile] = useState({})


    const handleClick = (member)=> {
        setModal(!modal)
        setProfile(member)
    }
    const handleClose = ()=>{
      if (modal) {
        setModal(false)
      }
    }

    useEffect(() => {
      document.title = 'About us | You-i Lab'
    }, [])
    

  return (
    <div className="about__container">
      <main className="about__landing-container nav-shift">
        <div className="about__landing-bg-image"></div>
        <div className="about__landing-textContainer">
          <h1 className="about__landing-title">SINCE 2017</h1>
          <p className="about__landing-text">
            We are established as part of the Instituto Potosino de
            Investigación Científica y Tecnológica, A.C. (IPICYT), located in
            San Luis Potosí city, México. Altogether, we have developed multiple
            projects focused on different areas, environmental topics like water
            preservation and air quality, and public health matters like the
            COVID-19 pandemic are some examples.
          </p>
        </div>
        <div className="about__landing-waves"></div>
      </main>
      <section className="about__section-1-container">
        <div className="about__section1-item">
          <img src="./Assets/img/icons/img-mision.png" alt="" />
          <h3>MISSION</h3>
          <p>
            To serve as a platform for empowering youth innovators in social
            good matters.
          </p>
        </div>
        <div className="about__section1-item" onClick={handleClose}>
          <img src="Assets/img/icons/img-vision.png" alt="" />
          <h3>VISION</h3>
          <p>
            To have top talented and creative people interested in managing and
            executing innovative interdisciplinary projects focused on social
            well-being
          </p>
        </div>
      </section>
      <div className="about__section2-container" onClick={handleClose}>
        <h2>YOUTH INNOVATION TEAM</h2>
        <div className="about__section2-team">
            {
                team.map((member, i) => (
                    <div key={i} className="about__section2-card">
                        <div className="about__section2-photo">
                            <img src={member.photo} alt={member.name} />
                        </div>
                        <div className="about__section2-info">
                            <h5>{member.name.toUpperCase()}</h5>
                            <h5>{member.lastname.toUpperCase()}</h5>
                        </div>
                        <button onClick={()=>handleClick(member) } className="btn">Show more</button>
                    </div>
                ))
            }
        </div>
      </div>
        
       {
           modal && <div className="background" onClick={handleClose}>
              <Modal profile={profile} modal={setModal} /> 
             </div>
       } 
      <section className="about__section3-container">
        <div className="about__section2-thanksBg" 
              style={{background: `url(./Assets/img/team/Collage_colab_.jpg)`,
              backgroundPosition:'center',
              backgroundSize: '40%'
          }}
        >
          {/* <img src="./Assets/img/team/Collage_colab_.jpg" alt="COLLABORATORS" /> */}
          <div className="about__section2-text">
            <h2>AND THANK YOU ALL</h2>
            <br />
            <h1>COLLABORATORS!</h1>{" "}
          </div>
        </div>
      </section>

        
    </div>
  );
};
