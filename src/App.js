import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import StorePage from './pages/StoresPage';
import AccountPage from './pages/AccountPage';

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* Switch: Once find a matched path, will stop finding and only render the matched page. 
        It ensures that only one pages is rendered.*/}
          <Route exact={true} path='/' component={MenuPage} />
          {/* exact: match path exactly */}
          <Route exact={true} path='/about' component={AboutPage} />
          <Route exact={true} path='/stores' component={StorePage} />
          <Route exact={true} path='/account' component={AccountPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
