import React from "react";

const Welcome = ()=>{
    return(
        <div className="welcome">
            <div className="container">
                <div className="row">
                    <div className="card shadow-lg col-10">
                        <a href="https://giftr-registry.herokuapp.com/" className="card-header stretched-link" target="_blank" rel="noreferrer noopener">Current Project</a>
                        <img className="card-img" src="./images/giftHome.PNG" alt="Card image"/>
                        {/* <div className="card-body">
                        </div> */}
                    </div>
                    <div className="card shadow-lg col-5">
                        <a href="https://github.com/Matt-Boggs" className="card-header stretched-link" target="_blank" rel="noreferrer noopener">Github Profile</a>
                        <img className="card-img" src="./images/gitThumb.PNG" alt="Card image"/>
                        {/* <div className="card-body">
                        </div> */}
                    </div>
                    <div className="card shadow-lg col-5">
                        <a href="https://www.linkedin.com/in/matt-david-boggs/" className="card-header stretched-link" target="_blank" rel="noreferrer noopener">Linkedin Profile</a>
                        <img className="card-img" src="./images/lnkdnThumb.PNG" alt="Card image"/>
                        {/* <div className="card-body">
                        </div> */}
                    </div>
                    {/* <div className="card shadow col-12">
                        <div className="card-body">
                            <a href="/projects" className="btn btn-primary stretched-link">Continue to Portfolio</a> 
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Welcome;