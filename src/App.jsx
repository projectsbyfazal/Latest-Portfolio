import './App.css'
import Contact from './components/Contact/Contact'
import Container from './components/Container'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import HireMe from './components/HireMe/HireMe'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import SkillsTools from './components/SkillsTools/SkillsTools'
import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={15}
        outerSize={10}
        color='245, 121, 32'
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={4}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />

      <Navbar />
      <Hero />
      <Services />
      <HireMe />
      <SkillsTools />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
