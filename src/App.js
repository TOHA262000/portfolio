import './app.scss';
import Protfoio from './components/Protfolio/Protfoio';
import Testimonial from './components/Testimonial/Testimonial';
import Topbar from './components/Topbar/Topbar';
import Works from './components/Works/Works';
import Intro from './components/Intro/Intro';
import Contact from './components/Contact/Contact';
import { useState } from 'react';
function App() {
  const [menuitems, setMenuitems] = useState(false);
  return (
    <div className="app">
      <Topbar menuitems={menuitems} setMenuitems={setMenuitems}></Topbar>
      <div className='sections'>
        <Intro></Intro>
        <Protfoio></Protfoio>
        <Works></Works>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
