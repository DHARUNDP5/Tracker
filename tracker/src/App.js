import { Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar.js';
import Footer from './Component/Footer/Footer.js';
import LandingPage from './Component/LandingPage/LandingPage.js';
function App() {
  return (
    <div>
          <Routes>
      
        <Route path="/" element={<LandingPage />} exact></Route>
       
             </Routes>
    </div>
  );
}

export default App;
