import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Chat from "./components/chat/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextState from "./context/ContextState";
import Admin from "./components/Admin";

function App() {
  return (
    <ContextState>
      <Router>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </ContextState>
  );
}

export default App;
