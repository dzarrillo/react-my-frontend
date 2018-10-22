import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MainForm from "./components/MainForm/MainForm";
import Store from "./layouts/Store/Store";
import Contact from "./layouts/Contact/Contact";
import MyPhotos from "./layouts/MyPhotos/MyPhotos";
import MyNavBars from "./layouts/MyNavBars/MyNavBars";
import Movie from "./layouts/Movie/Movie";
import Help from "./layouts/Help/Help";

const App = () => (
  <Router>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={MainForm} />
        <Route exact path="/home" component={MainForm} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/photos" component={MyPhotos} />
        <Route exact path="/mynavbars" component={MyNavBars} />
        <Route exact path="/movies" component={Movie} />
        <Route exact path="/help" component={Help} />
      </Switch>
      <Footer/>
    </div>
  </Router>
  
);

export default App;
