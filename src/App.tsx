import './App.css'
import About from './about/About'
import Navbar from './navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <div className="min-h-[80vh] flex justify-center items-center">
        <About/>
      </div>
    </>
  )
}

export default App
