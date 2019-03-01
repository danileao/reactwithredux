import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cartao from '../containers/cartao/Cartao';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={() => <h1>Ola</h1>} />
      <Route exact path="/cartao" component={Cartao} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
