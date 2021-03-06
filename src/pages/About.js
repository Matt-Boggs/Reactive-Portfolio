import React from "react";

const About = ()=>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <h2 className="col-12" id="name">Matt Boggs</h2>
                    <img className="col-12 shadow-sm" src="./images/PROF.jpg" alt="Profile"/>
                </div>
            
                <div className="col-12 col-md-4 info">
                
                    <p>Certified Full-Stack Developer, Forever a student</p>

                
                </div>
            
                <div className="col-12 col-md-3">
                    <h2 id="contact">Contact Info</h2>
                    
                    <ul className="contactBG">
                        <li><strong>Email:</strong> <a href="mailto:matt.david.boggs@gmail.com" target="_blank" rel="noreferrer noopener">matt.david.boggs@gmail.com</a></li>
                        <li><strong>Github:</strong> <a href="https://github.com/Matt-Boggs" target="_blank" rel="noreferrer noopener">matt-boggs</a></li>
                        <li><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/matt-david-boggs/" target="_blank" rel="noreferrer noopener">matt-david-boggs</a></li>
                        <li><strong>Phone:</strong> 1-719-238-2520</li>
                        <li><strong>Portfolio:</strong><a href="https://docs.google.com/document/d/1WKb5q0BQ0WMqXJeVxkXW6WY1PEF-DVTfFcFFvyiFI3I/edit?usp=sharing" target="_blank" rel="noreferrer noopener">Google Doc</a></li>
                    </ul>

                </div>

            </div>
        </div>
        </>
    )
}

export default About;