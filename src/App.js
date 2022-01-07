import './App.css';
import { Navbar } from './components';
import { Slider } from './components';
import { Games } from './components';
import { About } from './components';
import { Review } from './components';
import { Footer } from './components';
import { 
  logo,
  navItems,
  games,
  about, 
  testimonials,
  footerItems
} from './data.js';



function App() {
  return (
    <div className="App">
      <Navbar logo={logo} navItems={navItems}/>
      <Slider />
      <Games menu ={games}/>
      <About about = {about} />
      <Review testimonials = {testimonials.testimonial} title={testimonials.title}/>
      <Footer footerItems={footerItems}/>
       
    </div>
  );
}

export default App;
