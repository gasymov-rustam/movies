import { Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import { routesMap } from "./assets/data/routesMap";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        {routesMap.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            render={(props) => <route.component {...props} url={route.url} title={route.title} />}
          />
        ))}
        <Redirect to="/" />

        {/* <Route exact path="/" component={Popular} />
        <Route exact path="/nowplaying" component={NowPlaying} />
        <Route exact path="/toprated" component={TopRated} />
        <Route exact path="/upcoming" component={Upcoming} />
        <Redirect to="/" /> */}
      </Switch>
    </>
  );
}

export default App;
