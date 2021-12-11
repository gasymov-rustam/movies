import "./App.css";
import { Movies } from "./components/Movies";
import { SideBar } from "./components/SideBar";
import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      <Title />
      <div className="container__wrap">
        <SideBar />
        <Movies />
      </div>
    </div>
  );
}

export default App;
