import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./views/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/shop" element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
