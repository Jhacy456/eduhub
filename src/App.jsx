
import './App.css'
import Aboutus from './components/Aboutus';
import Features from './components/features';
import Footer from './components/footer';
import Hero from './components/hero';
import Navbar from './components/navbar';



function App() {

  return (
    <div>
      <Navbar />
      <Hero />

      <section>
        <Features />
      </section>

      <section>
        <Aboutus />
      </section>

      <footer>
        <Footer />
      </footer>

    </div>


  );
}

export default App
