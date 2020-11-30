import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from './pages/Projects';
import About from "./pages/About"
import Welcome from "./pages/Welcome"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Wrapper from "./component/Wrapper"

function App() {
  return (
  <>  
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Header/>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Footer />
        </Wrapper>
      </div>
    </Router>
  </>  
  );
}

export default App;
