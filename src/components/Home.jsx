import React, { useEffect } from 'react'

export const Home = () => {

    useEffect(() => {
        document.title = 'Home | You-i Lab'
    }, [])


    return (
        
    <div className=" home__container">
        
    <main className="home__landing-container  nav-shift">
        <div className="home__landing-bg-image"></div>
        <div className="home__landing-textContainer">
                <h1 className="home__landing-text">YOUTH INNOVATION LABORATORY</h1>
                <p className="home__landing-text">We are a multidisciplinary team for youth
                    empowerment, technological
                    innovation and its applications in social
                    impact projects.</p>
        </div>     
        <div className="home__landing-waves"></div>       
    </main>
    
    <section className="home__section1-container">
        <div className="home__section1-text">
            <h2>WHY INTERDISCIPLINARY?</h2>
            <p>Well, we truly believe that problematics have different angles, 
            the most important the
            motivation for contributing to a social cause..</p>
        </div>
    </section>
    
    <div className="home__section2-container">
    <div className="home__section2-bg-image"></div>    
    <div className="home__section2-bg-image-desk"></div>    
        <div className="home__section2-textContainer">
            <h2>NETWORK POWER!</h2>
            <p>Because of the effects that social problematics have all over the world, solutions must
             be based on the interaction among the four main sectors:</p>
        </div>
        <div className="home__section2-itemContainer">
        <div className="home__section2-item">
            <img src="/Assets/img/icons/society.png" alt="" />
            <h3>SOCIETY</h3>
        </div>
        <div className="home__section2-item">
            <img src="/Assets/img/icons/investigation.png" alt="" />
            <h3>INVESTIGATION</h3>
        </div>
        <div className="home__section2-item">
            <img src="/Assets/img/icons/government.png" alt="" />     
            <h3>GOVERNMENT</h3>
        </div>
        <div className="home__section2-item">
            <img src="/Assets/img/icons/academy.png" alt="" />
            <h3>ACADEMY</h3>
       
      </div>

        </div>
        <div className="home__section2-textContainer">
            <p>We are always trying to grow up our alliances with other institutions, either nationals or
                internationals, in order to deliver integral solutions.</p>
        
        </div>
    </div>
    
    <div className="home__section3-container">
        <h2>SOCIAL GOOD IS THE GOAL...</h2>
        <p>We all can sum something to make this world a better place. Do you want to be part of
                our mission? Do you have an idea? <br />
                Feel free to get in touch with us.</p>
        <a className="btn" href="/contact.html">Contact Us</a>
        <p className="hashtag">   #JoinTheChange </p>
    </div>
    </div>

    )
}
