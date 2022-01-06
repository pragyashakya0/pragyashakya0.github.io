import './App.css';
import { Navbar } from './components';
import { Slider } from './components';
import { GameCard } from './components';
import { About } from './components';
import { Review } from './components';
import { Footer } from './components';
import { gameList, about, testimonials } from './data.js';



function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Slider />
      <GameCard games = { gameList }/>
      <section className='about' id="about">
        <About about = { about } />
        <Review testimonials = { testimonials.testimonial } title={testimonials.title}/>
      </section>
      <Footer />
       
    </div>
  );
}

export default App;
