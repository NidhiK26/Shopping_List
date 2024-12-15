import { BrowserRouter, Routes, Route } from "react-router";
import About from "./routes/About";
import Home from "./routes/LandingPage";
import Signup from "./routes/singup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './routes/LandingPage';
// //import LoginSignup from './routes/Login_Signup'; // Rename your Login/Sign Up Page component

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<LandingPage />} />
//                 <Route path="/signup" element={<LoginSignup />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

