import './App.css';
import { Navbar } from './components';
import { Slider } from './components';
import { Games } from './components';
import { About } from './components';
import { Review } from './components';
import { Update } from './components';
import { Footer } from './components';
import { 
  logo,
  navItems,
  sliderImages,
  sliderText,
  games,
  about, 
  testimonials,
  newsletter,
  footerItems
} from './data.js';



function App() {
  return (
    <div className="App">
      <Navbar logo={logo} navItems={navItems}/>
      <Slider images={sliderImages} text={sliderText} />
      <Games collections={games}/>
      <About about={about}/>
      <Review testimonials={testimonials.testimonial} title={testimonials.title}/>
      <Update info={newsletter} forms={newsletter.form} submit={newsletter.submit}/>
      <Footer footerItems={footerItems}/>
       
    </div>
  );
}

export default App;
