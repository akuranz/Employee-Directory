import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Directory from "./pages/Directory";

function App() {
  return (
    <Router>
      <Header />
      <Directory />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Directory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
