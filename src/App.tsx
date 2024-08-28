import './App.css'
import About from './about/About'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <div className="min-h-[80vh] flex justify-center items-center">
        <About/>
      </div>
      <Footer/>
    </>
  )
}

export default App
