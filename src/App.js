
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import  NewProject from "./components/pages/NewProject";
function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">NewProject</Link>
        
      </div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/company">
          <Company/>
        </Route>
        <Route path="/newproject">
          <NewProject/>
        </Route>
      </Switch>
      <p>Footer</p>
    </Router>
  )
    
}

export default App;
