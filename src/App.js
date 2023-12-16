import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Quiz from "./Pages/Quiz";

function App() {
  return (
    // <HashRouter>

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App