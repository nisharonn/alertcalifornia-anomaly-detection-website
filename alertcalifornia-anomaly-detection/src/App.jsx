import Navbar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Data from './components/Data.jsx'
import Methods from './components/Methods.jsx'
import Results from './components/Results.jsx'
import './App.css'

function App() {
  

  return (
    <>
    <div className="bg-cream">
      <Navbar />
      <Hero />
      <Problem />
      <Data />
      <Methods />
      <Results />
    </div>
    </>
  )
}

export default App
