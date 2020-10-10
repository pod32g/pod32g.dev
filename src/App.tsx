import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { NavigationBar } from './Components';
import Routes from './Routes/Routes';
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history";


function App() {

  const history = createBrowserHistory();

  ReactGA.initialize("G-5P84M8EG3G");

  history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  })

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
