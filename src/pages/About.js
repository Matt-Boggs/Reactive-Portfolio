import React from "react";

const About = ()=>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <h2 className="col-12" id="name">Matt Boggs</h2>
                    <img className="col-12 shadow-sm" src="./images/PROF.jpg" alt="Girlie and I"/>
                </div>
            
                <div className="col-12 col-md-4 info">
                
                    <p>this is another Paragraph</p>

                    <p>hello my name is matt boggs</p>
                
                </div>
            
                <div className="col-12 col-md-3">
                    <h2 id="contact">Contact Info</h2>
                    
                    <ul>
                    <li><strong>Email:</strong> <a href="mailto:matt.david.boggs@gmail.com" target="_blank" rel="noreferrer noopener">matt.david.boggs@gmail.com</a></li>
                    <li><strong>Github:</strong> <a href="https://github.com/Matt-Boggs" target="_blank" rel="noreferrer noopener">matt-boggs</a></li>
                    <li><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/matt-david-boggs/" target="_blank" rel="noreferrer noopener">matt-david-boggs</a></li>
                    <li><strong>Phone:</strong> 1-719-238-2520</li>
                    </ul>

                </div>

            </div>
        </div>
        </>
    )
}

export default About;