import logo from "./logo.svg";
import "./App.css";
import HomePage from "./customer/components/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/navigation/Navigation";
import Product from "./customer/components/Product/Product";

function App() {
  return (
    <div className="Home">
      <Navigation />

      <div>
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
