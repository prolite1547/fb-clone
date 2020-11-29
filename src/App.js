import "./App.css";
import Feed from "./components/partials/Feed";
import Header from "./components/partials/Header";
import Login from "./components/partials/Login";
import Sidebar from "./components/partials/Sidebar";
import Widgets from "./components/partials/Widgets";
import { useStateValue } from "./config/StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
