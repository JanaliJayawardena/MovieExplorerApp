import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import LoginSignup from "../pages/detail/LoginSignup";
import Favorites from "../pages/Favorites";

import * as Config from "../constants/Config";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginSignup} />
      <Route path="/favorites" component={Favorites} />

      {/* More specific dynamic routes first */}
      <Route
        path={`/${Config.HOME_PAGE}/:category/search/:keyword`}
        component={Catalog}
      />
      <Route
        path={`/${Config.HOME_PAGE}/:category/:id`}
        component={Detail}
      />
      <Route
        path={`/${Config.HOME_PAGE}/:category`}
        component={Catalog}
      />

      {/* Home route — last */}
      <Route path={`/${Config.HOME_PAGE}`} exact component={Home} />
    </Switch>
  );
};

export default Routes;
