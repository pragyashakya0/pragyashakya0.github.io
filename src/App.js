import './App.css';
import { Navbar } from './components';
import { Slider } from './components';
import { Games } from './components';
import { PopUp } from './components';
import { About } from './components';
import { Review } from './components';
import { Footer } from './components';
import { 
  logo,
  navItems,
  gameTypes,
  gameList, 
  popCard,
  about, 
  testimonials,
  footerItems
} from './data.js';



function App() {
  return (
    <div className="App">
      <Navbar logo={logo} navItems={navItems}/>
      <Slider />
      <Games gameTypes={gameTypes} games={gameList}/>
      <PopUp 
        gameInfo={gameList} 
        play={popCard.buttonText}
        info={popCard.infoText}
      />
      <section className='about' id="about">
        <About about = {about} />
        <Review testimonials = {testimonials.testimonial} title={testimonials.title}/>
      </section>
      <Footer footerItems={footerItems}/>
       
    </div>
  );
}

export default App;
