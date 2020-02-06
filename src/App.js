import React from 'react';
import './App.css';
import Start from './components/Start';
import Game from './components/Game';
import Correct from './components/Correct';
import Incorrect from './components/Incorrect';
import Container from "react-bootstrap/Container";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

function App() {
  return (
    <Container className="App">
        <Router>
            <div>
                <Route path="/" component={Start} exact />
                <Route path="/game" component={Game} exact />
                <Route path="/correct" component={Correct} exact />
                <Route path="/incorrect" component={Incorrect} exact />
            </div>
        </Router>
    </Container>
  );
}

export default App;
