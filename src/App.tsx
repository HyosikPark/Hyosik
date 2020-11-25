import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Skills from './components/Skills';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/skills' component={Skills} />
      <Route path='/project' component={Project} />
      <Route path='/contact' component={Contact} />
    </Router>
  );
};

export default App;
