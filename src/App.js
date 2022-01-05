import './App.css';
import { Header } from './components';
import { Slider } from './components';
import { GameCard } from './components';
import { About } from './components';
import { Review } from './components';
import { gameList, about, testimonials } from './data.js';



function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <GameCard games = { gameList }/>
      <section className='about'>
      <About about = { about } />
      <Review testimonials = { testimonials.testimonial } title={testimonials.title}/>
      </section>
     
    </div>
  );
}

export default App;
