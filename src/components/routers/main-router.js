import React, { useContext } from 'react';
import { Route, Switch } from 'react-router';
import { Home } from '../pages/home/home';


const MainRouter = () => {
  return (
    <div >
      <Switch>

        <Route exact={true} path="/" component={Home} />

      </Switch>
    </div>
  );
}

export { MainRouter };
