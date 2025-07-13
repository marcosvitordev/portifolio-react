import './App.css';
import Header from './components/header/Header.jsx';
import { Home } from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Work from './components/work/Work.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import ScrollUp from './components/scrollUp/ScrollUp.jsx';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
        <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
