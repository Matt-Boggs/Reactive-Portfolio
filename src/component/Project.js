import React from "react";

const Project = (props)=>{

        return (
            <div className="col-6-md col-12 projects">
                <h3>Shelf Indulgence</h3>
                <p><a href="https://shelf-indulgence-bc.herokuapp.com/">Heroku link</a></p>
                <p><a href="https://github.com/MarkBrazee/project2_BookClub">GitHub Repository</a></p>
                <p>Search for books using an api, add those books to a database of books you want to read, and keep track of books you have read</p>
                <img src="../images/Shelf.png"/>
            </div>
          )
};

export default Project;