import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./views/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      {/*<Home />
      <Register/>
      <Login/> */}
      <Cart/>
      <Footer />
    </div>
  );
};


export default App;
