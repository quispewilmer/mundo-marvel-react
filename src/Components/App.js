import React from 'react';
import logo from '../logo.svg';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Characters from './Pages/Characters';
import CharacterPage from './Templates/CharacterPage';
import Header from './Organisms/Header';
import Footer from './Organisms/Footer';
import {Link, NavLink} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../Styles/App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/characters/:id" component={CharacterPage}/>
          <Route path="/characters" component={Characters}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
