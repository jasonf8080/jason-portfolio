import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, NavMenu, Footer } from "./components";
import { Home, Project } from "./pages";
import { useGlobalContext } from "./context";
import { AnimatePresence } from 'framer-motion';


function App() {
  const {showMenu} = useGlobalContext();
  return (
   <BrowserRouter>
      <Navbar/>

       <AnimatePresence mode='wait'>
              {showMenu && <NavMenu/>}
        </AnimatePresence>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/project/:title' element={<Project/>}></Route>
      </Routes>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
