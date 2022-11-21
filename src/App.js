import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Auth from "./components/Auth";
// import Chat from './components/chat/Chat'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
