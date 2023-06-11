import "./App.css";
import Info from "./Compenents/Info";
import About from "./Compenents/About";
import Interests from "./Compenents/Interests";
import Footer from "./Compenents/Footer";

function App() {
  return (
    <div className="app">
      <main>
        <Info />
        <About />
        <Interests />
      </main>
      <Footer />
    </div>
  );
}

export default App;
