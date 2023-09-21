import logo from './logo.svg';
import './App.css';
import HeaderNavbar from './HeaderNavbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <HeaderNavbar />
      <Hero />
      <main id="main">
        <About />
        <Services />
      </main>
    </div>
  );
}

export default App;
