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
  close,
  about, 
  testimonials,
  newsletter,
  footer
} from './data.js';



function App() {
  return (
    <div className="App">
      <Navbar logo={logo} navItems={navItems}/>
      <Slider images={sliderImages} text={sliderText} />
      <Games collections={games} close={close}/>
      <About about={about}/>
      <Review testimonials={testimonials.testimonial} title={testimonials.title} rating={testimonials.rating}/>
      <Update info={newsletter} forms={newsletter.form} submit={newsletter.submit}/>
      <Footer footerItems={footer.items} footerText={footer.text}/>
       
    </div>
  );
}

export default App;
