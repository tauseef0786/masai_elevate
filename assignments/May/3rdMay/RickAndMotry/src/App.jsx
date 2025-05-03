import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CardDetails from "./components/CardDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<CardDetails />} />
    </Routes>
  );
};

export default App;
