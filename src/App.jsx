import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <div className="home">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
