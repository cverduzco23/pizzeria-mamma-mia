import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Pizza from "./views/pizza";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Pizza />
      <Login/>
      <Register/>
      <Cart/>
      <Footer />
    </div>
  );
}

export default App;






