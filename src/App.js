import './app.scss';
import Portfoio from './components/Portfolio/Portfoio';
import Testimonial from './components/Testimonial/Testimonial';
import Topbar from './components/Topbar/Topbar';
import Works from './components/Works/Works';
import Intro from './components/Intro/Intro';
import Contact from './components/Contact/Contact';
import { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
function App() {
  const [menuitems, setMenuitems] = useState(false);
  return (
    <div className="app">
      <Topbar menuitems={menuitems} setMenuitems={setMenuitems}></Topbar>
      <SideBar  menuitems={menuitems} setMenuitems={setMenuitems}></SideBar>
      <div className='sections'>
        <Intro></Intro>
        <Portfoio></Portfoio>
        <Works></Works>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
