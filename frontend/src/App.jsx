import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Detail from "./pages/Detail";
// import About from "./pages/About";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/movie/:id" element={<Detail />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
