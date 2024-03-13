import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Socialicons from "./components/Socialicons";





function App() {
  return (
  <div>
    <Navbar/>
    <Home/>
    <Socialicons/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
  </div>
  );
}

export default App;
