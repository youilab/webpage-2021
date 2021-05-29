import React from 'react'



export const Footer = () => {
    return (
        <footer className="footer__container footer">
            <div className="footer__sections">

                <div className="footer__section">
                    <div className="footer-title">
                        <h4>YOUTH INNOVATION
                            LABORATORY</h4>
                    </div>
                    <div className="footer__textContainer">
                        <p>The You-i Lab is hosted by the National
                            Supercomputing Center (CNS) in San
                            Luis Potosí, which is a state-of-the-art
                            HPC research facility that focuses on the
                            development of large scale industrial
                            projects. The CNS that is managed by
                            the Instituto Potosino de Investigación
                            Científica y Tecnológica (IPICYT).</p>
                    </div>
                    </div>
                <div className="footer__section">
                    <div className="footer-title">
                        <h4>USEFUL LINKS</h4>
                    </div>
                    <div className="footer__textContainer">
                        <a href="https://www.conacyt.gob.mx/">CONACYT</a><br />
                        <a href="https://www.ipicyt.edu.mx/">IPICYT</a><br />
                    <a href="https://www.ipicyt.edu.mx/Cns/cns.php">CNS</a><br />
                    </div>
                </div>
                <div className="footer__section">
                    <div className="footer-title">
                        <h4>CONTACT</h4>  
                    </div>
                    <div className="footer__textContainer">
                        <p>Camino a la Presa San José 2055, Lomas<br />
                            4 sección San Luis Potosí, 78216 SLP,
                            México.<br />
                            you-i.lab@ipicyt.edu.mx<br />
                            (444) 834-2000 ext. 2117</p>
                    </div>
                
                </div>
            </div>
            <div className="social-footer">
                <div className="social-footer-icon">
                    <a href="https://www.facebook.com/You-i-Lab-113474653396663/"><img className=" float-right" src="/Assets/img/icons/footer-fb.png" alt="facebook" /></a> 
                    <a href="https://twitter.com/youi_lab"><img src="/Assets/img/icons/footer-twitter.png" alt="twitter" /></a> 
                </div>
                <p className="Copyright">© 2018-2020 Copyright: Youth Innovation Laboratory</p>  
            </div>
        </footer>
    )
}
