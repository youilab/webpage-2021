import React, { useEffect } from 'react'

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact | You-i Lab'
      }, [])
    
    return (
        <div class="contact__container">
            <h1>SEND US A MESSAGE</h1>
        <section class="contact__section">
            
            <div class="contact__form nav-shift">
                <form action="/action_page.php " >
                    <label for="name">NAME</label>
                    <input type="text" id="name" name="name" />
                
                    <label for="email">EMAIL</label>
                    <input type="email" id="email" name="lastname" />
                
                    <label for="message">MESSAGE:</label>
                    <textarea id="message" name="message" ></textarea>
                  
                    <input class="btn" type="submit" value="Submit" />
                </form>   
            </div> 
            <div class="contact__map">
                <iframe title="map of IPICYT" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.377337268032!2d-101.03794678599174!3d22.14970418540197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98c8d0777cff%3A0x8ed9d9a98ee5ca91!2sInstituto%20Potosino%20de%20Investigaci%C3%B3n%20Cient%C3%ADfica%20y%20Tecnol%C3%B3gica%20A.C.!5e0!3m2!1ses-419!2smx!4v1594043950681!5m2!1ses-419!2smx" width="100%" height="300px" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </section>
        

        
    </div>
    )
}
