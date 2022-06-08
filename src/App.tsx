import CakeContainer from "./components/CakeContainer";
import "./App.css";
import PepsiContainer from "./components/PepsiContainer";
import UserContainer from "./components/UserContainer";

const App = () => {
  return (
    <div className="App">
      <div className="App">
        <CakeContainer />
        <PepsiContainer />
        <UserContainer />
      </div>
    </div>
  );
};

export default App;
