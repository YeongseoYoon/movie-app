import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Layout from "./components/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/character/:id">
          <Layout>
            <Detail />
          </Layout>
        </Route>
        <Route path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
