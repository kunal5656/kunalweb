import './App.css';
import $ from 'jquery'
import Navbar from './Navbar';
import Header from './Header';
import How from './How';
import howapi from './howapi';
import About from './About';
import Aboutapi from './Aboutapi';
import Support from './Support';
import Supportapi from './Supportapi';
import Contact from './Contact';
import Foot from './Foot';
function App() {
  return (
    <>
      <Navbar />
     
      <Header />
      <How />
      <About />
      <Support />
      <Contact />
      <br />

      <Foot />
    </> 
  );
}

export default App;
