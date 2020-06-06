import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeRouter from './Pages/Home/HomeRouter';
import VictimsRouter from './Pages/Victims/VictimsRouter';

export default function MainRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/victims">Victims</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomeRouter />
          </Route>
          <Route path="/victims">
            <VictimsRouter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}