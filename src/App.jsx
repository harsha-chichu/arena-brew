import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import CinematicBreak from './components/CinematicBreak'
import Beers from './components/Beers'
import Food from './components/Food'
import Cocktails from './components/Cocktails'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

const Divider = () => (
  <div className="section-divider mx-auto max-w-7xl" />
)

export default function App() {
  return (
    <div className="bg-bg-primary text-text-primary font-sans">
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <CinematicBreak />
      <Beers />
      <Divider />
      <Food />
      <Divider />
      <Cocktails />
      <Divider />
      <Gallery />
      <Divider />
      <Reservation />
      <Footer />
    </div>
  )
}
