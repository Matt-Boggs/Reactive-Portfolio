import React from "react";
import Project from "../component/Project";


const Projects = ()=>{
    return (
        <div>
      <header>
        <h1>Boggs Portfolio</h1>
      </header>
  
      <div className="container-fluid">
        <section className="row">
          <Project
            title="Shelf Indulgence"
            hosted="https://shelf-indulgence-bc.herokuapp.com/"
            repo="https://github.com/MarkBrazee/project2_BookClub"
            about="Search for books using an api, add those books to a database of books you want to read, and keep track of books you have read"
            image="./images/Shelf.png"
          />
          <Project
            title="Eat Da Burger"
            hosted="https://intense-spire-84318.herokuapp.com/"
            repo="https://github.com/Matt-Boggs/burger"
            about="This application uses handlebars, routing, and ORM with a CMV structure, to create and add to a database of burgers, The user is also able to click a button to 'devour' a burger, as well as a button to delete a burger with 'YUCK'"
            image="./images/burger.PNG"
          />
          <Project
            title="What's the Weather Like?"
            hosted="https://matt-boggs.github.io/Whats-the-Weather-Like/"
            repo="https://github.com/Matt-Boggs/Whats-the-Weather-Like"
            about="After the user enters a city to search for, shows the temperature, humidity, windspeed and UV index for that city. Also shows the 5 day forecast for that city. Uses three different weather-based API's"
            image="./images/Weather.PNG"
          />
          <Project
            title="Let's Hit the Slopes"
            hosted="https://matt-boggs.github.io/Lets-Hit-the-Slopes/"
            repo="https://github.com/Matt-Boggs/Lets-Hit-the-Slopes"
            about="This app shows the user the base and peak conditions at Pila ski resort in Italy. Also accepts user input to convert ski pass prices to user's chosen currency. Uses 2 API's"
            image="./images/Slopes.PNG"
          />
          <Project
            title="Who Works Here?"
            hosted="https://github.com/Matt-Boggs/Who-Works-Here"
            repo="https://github.com/Matt-Boggs/Who-Works-Here"
            about="This app takes in user input for different kind of employees, and then uses that data to generate an html with cards for each team member"
            image="https://i.imgur.com/Wi7WI5z.png"
          />
        </section>
      </div>
    </div>
    )
}

export default Projects