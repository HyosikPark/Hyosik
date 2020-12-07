import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Skills from './components/Skills';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.scss';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup>
              <CSSTransition classNames='fade' timeout={500} key={location.key}>
                <Switch location={location}>
                  <Route path='/Hyosik' exact component={About} />
                  <Route path='/Hyosik/skills' component={Skills} />
                  <Route path='/Hyosik/project' component={Project} />
                  <Route path='/Hyosik/contact' component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      ></Route>
    </Router>
  );
};

export default App;
