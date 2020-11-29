import './App.css';
import Project from "./component/Project"
function App() {
  return (
    <div>
      <header>
        <h1>My Boppin' Bio</h1>
      </header>
  
      <div className="container-fluid">
        <section className="row">
          <Project />
          <div className="col-6-md col-12 projects">
            <h3>Eat Da Burger</h3>
            <p><a href="https://intense-spire-84318.herokuapp.com/">Heroku link</a></p>
            <p><a href="https://github.com/Matt-Boggs/burger">GitHub Repository</a></p>
            <p>This application uses handlebars, routing, and ORM with a CMV structure, to create and add to a database of burgers, The user is also able to click a button to "devour" a burger, as well as a button to delete a burger with "YUCK"</p>
            <img src="./images/burger.PNG"/>
          </div>
          <div className="col-6-md col-12 projects">
              <h3>What's the Weather Like?</h3>
              <p><a href="https://matt-boggs.github.io/Whats-the-Weather-Like/">GitHub Pages</a></p>
              <p><a href="https://github.com/Matt-Boggs/Whats-the-Weather-Like">GitHub Repository</a></p>
              <p>After the user enters a city to search for, shows the temperature, humidity, windspeed and UV index for that city. Also shows the 5 day forecast for that city. Uses three different weather-based API's</p>
              <img src="../images/Weather.PNG"/>
          </div>
          <div className="col-6-md col-12 projects">
              <h3>Let's Hit the Slopes</h3>
              <p><a href="https://matt-boggs.github.io/Lets-Hit-the-Slopes/">GitHub Pages</a></p>
              <p><a href="https://github.com/Matt-Boggs/Lets-Hit-the-Slopes">GitHub Repository</a></p>
              <p>This app shows the user the base and peak conditions at Pila ski resort in Italy. Also accepts user input to convert ski pass prices to user's chosen currency. Uses 2 API's</p>
              <img src="../images/Slopes.PNG"/>
          </div>
          <div className="col-6-md col-12 projects">
              <h3>Who Works Here?</h3>
              <p><a href= "https://github.com/Matt-Boggs/Who-Works-Here" >GitHub Pages</a></p>
              <p>This app takes in user input for different kind of employees, and then uses that data to generate an html with cards for each team member</p>
              <img src="https://i.imgur.com/Wi7WI5z.png"/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
