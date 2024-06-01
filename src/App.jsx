import About from "./About/About";
import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="body">
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
