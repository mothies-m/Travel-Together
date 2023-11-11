import { Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Join from './pages/Join';
import Create from './pages/Create';
import Contacts from './pages/Contacts';
import Signup from './pages/Signup';

import MaybeShowNavbar from "./Component/MaybeShowNavbar";

function App() {
  return (
    <div>
        <MaybeShowNavbar>
          <Navbar />
        </MaybeShowNavbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/join' element={<Join />} />
          <Route path='/create' element={<Create />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
