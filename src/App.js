import { Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { NowPlaying } from "./pages/NowPlaying";
import { Popular } from "./pages/Popular";
import { TopRated } from "./pages/TopRated";
import { Upcoming } from "./pages/Upcoming";

function App() {
  return (
    <>
      <Header />
      {/* <Movies /> */}
      <Switch>
        {/* {routesMap.map((item) => {
          <Route key={item.path} exact={item.exact}>
            {item.component}
          </Route>;
        })} */}
        <Route exact path="/" component={Popular} />
        <Route exact path="/nowplaying" component={NowPlaying} />
        <Route exact path="/toprated" component={TopRated} />
        <Route exact path="/upcoming" component={Upcoming} />
        <Redirect to="/" />
      </Switch>

      {/* <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/city/:cityName" component={City}/>
          <Route path="/*" component={NotFound}/>
        </Switch> */}
    </>
  );
}

export default App;
