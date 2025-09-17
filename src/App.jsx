import PageNotFound from "components/PageNotFound";
import Product from "components/product/Product";
import ProductList from "components/product/ProductList";
import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact component={ProductList} path="/products" />
    <Route exact component={Product} path="/product/:slug" />
    <Redirect exact from="/" to="/products" />
    <Route component={PageNotFound} path="*" />
  </Switch>
);

export default App;
