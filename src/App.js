import './App.css';
import Login from './components/Login/Login';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Header from './components/Header';





// https://v5.reactrouter.com/web/example/basic
// https://ant.design/
function App() {
  return (
    <div className="App">



      <Router>


        <Switch>

          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/Dashboard">
            
            {
                localStorage.getItem('user')?
                <Dashboard />
                :
                <Login />
            }
          </Route>

          <Route exact path="/About">
            
            {
                localStorage.getItem('user')?
                <About />
                :
                <Login />
            }
          </Route>

          <Route exact path="/Home">
           
            {
                localStorage.getItem('user')?
                <Home />
                :
                <Login />
            }
          </Route>


          <Route exact path="/ContactUs">
            {
                localStorage.getItem('user')?
                <ContactUs />
                :
                <Login />
            }
            
          </Route>




        </Switch>
      </Router>

    </div>


  );
}

export default App;
