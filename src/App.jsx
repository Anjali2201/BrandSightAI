import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Detection from "./pages/Detection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detection" element={<Detection />} />
      </Routes>
    </div>
  );
}

export default App;
