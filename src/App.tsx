import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { NavigationBar } from './Components';
import Routes from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        {
          Routes.map((route, index) => {
            return (
              <Route key={index} exact path={route.path.toString()} component={route.component} />
            )
          })
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
