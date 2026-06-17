import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Beers from './components/Beers'
import Food from './components/Food'
import Cocktails from './components/Cocktails'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg-primary text-text-primary font-sans">
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Beers />
      <Food />
      <Cocktails />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  )
}
