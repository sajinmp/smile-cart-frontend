import { Flex } from "@chakra-ui/react";
import Home from "components/Home";
import PageNotFound from "components/PageNotFound";
import Product from "components/product/Product";
import { NavLink, Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => (
  <>
    <Flex gap={2} mx={4}>
      <NavLink
        exact
        activeStyle={{ fontWeight: "bold", textDecoration: "underline" }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        exact
        activeStyle={{ fontWeight: "bold", textDecoration: "underline" }}
        to="/product"
      >
        Product
      </NavLink>
    </Flex>
    <Switch>
      <Route exact component={Product} path="/product" />
      <Route exact component={Home} path="/" />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </>
);

export default App;
