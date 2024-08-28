import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Sobre from "./pages/about/Sobre"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div className="min-h-[80vh]">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sobre' element={<Sobre/>} />
          </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
