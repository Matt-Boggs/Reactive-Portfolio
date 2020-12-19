import React from "react";

const Project = (props)=>{

    return (
        <div className="col-6-md col-12 projects">
            <h3 className="indProj">{props.title}</h3>
            <p className="indProj"><a href={props.hosted}>Hosted page</a></p>
            <p className="indProj"><a href={props.repo}>GitHub Repository</a></p>
            <p className="indProj">{props.about}</p>
            <img className="proj-image shadow-lg" src={props.image} alt={props.image}/>
        </div>
    )
};

export default Project;