import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./views/Homepage";
import Shop from "./views/Shop";
import About from "./views/About";
import Account from "./views/Account";
import Cart from "./views/Cart";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/my-account" element={<Account/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
