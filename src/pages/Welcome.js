import React from "react";

const Welcome = ()=>{
    return(
        <div className="welcome">
            <div className="container">
                <div className="row">
                    <div className="card shadow-lg col-3">
                        <img className="card-img-top" src="./images/gitThumb.PNG" alt="Card image"/>
                        <div className="card-body">
                            <a href="https://github.com/Matt-Boggs" className="btn btn-primary stretched-link" target="_blank">Github Profile</a>
                        </div>
                    </div>
                    <div className="col-1">
                        
                    </div>
                    <div className="card shadow-lg col-3">
                        <img class="card-img-top" src="./images/Bird2.jpg" alt="Card image"/>
                        <div className="card-body">
                        <a href="#" className="btn btn-primary stretched-link" target="_blank">Current Project</a>
                        </div>
                    </div>
                    <div className="col-1">
                        
                    </div>
                    <div className="card shadow-lg col-3">
                        <img class="card-img-top" src="./images/lnkdnThumb.PNG" alt="Card image"/>
                        <div className="card-body">
                        <a href="https://www.linkedin.com/in/matt-david-boggs/" className="btn btn-primary stretched-link" target="_blank">Linkedin Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;