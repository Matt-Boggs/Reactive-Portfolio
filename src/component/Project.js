import React from "react";

const Project = (props)=>{

    return (
        <div className="col-6-md col-12 projects">
            <h3>{props.title}</h3>
            <p><a href={props.hosted}>Hosted page</a></p>
            <p><a href={props.repo}>GitHub Repository</a></p>
            <p>{props.about}</p>
            <img src={props.image}/>
        </div>
    )
};

export default Project;