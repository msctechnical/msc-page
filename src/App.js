import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Skills from './components/Skills';
import Contactus from "./components/Contactus";
import Tutorials from "./components/Tutorials";
import Footer from "./components/Footer";
import Youtube from "./components/Youtube";
import About from "./components/About_us";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={[
              <Aboutme />,
              <Skills />,
              <Youtube />,
              <Contactus />,
            ]}
          ></Route>
          <Route path="msc-page/about" element={<About/>}></Route>
          <Route path="msc-page/tutorials" element={<Tutorials />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
