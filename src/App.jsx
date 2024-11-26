import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn"; // Import the SignIn component
import "./App.css";

function App() {


  return (
    <Router>
        <Routes>   
          <Route path="/" element={<SignIn />} />
        </Routes>
    </Router>
  );
}

export default App;
