import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from './components/Appbar';
import Home from './components/pages/Home';
import ReadingPage from './components/pages/ReadingPage';

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/read">
          <ReadingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
