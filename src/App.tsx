import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from "framer-motion";
import PageTransition from './Anim/PageTransition.tsx';

import './css/App.css'

import Header from './Elements/Header.tsx';
import MainPage from './Pages/MainPage.tsx';
import About from './Pages/About.tsx';
import Footer from './Elements/Footer.tsx';


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <MainPage />
              <footer>
                <Footer />
              </footer>
            </PageTransition>
          }
        />
        <Route
          path="/About"
          element={
            <PageTransition>
              <About />
              <footer>
                <Footer />
              </footer>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
