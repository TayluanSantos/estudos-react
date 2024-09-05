import { List, MagnifyingGlass, PlusSquare, UserCircle, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {

  const [isOpen,setisOpen] = useState(false)

  function toggleMenu () {
    setisOpen(!isOpen)
  }
  
  return (
    <header className='flex justify-center shadow-md bg-white text-green-700 text-sm lg:text-base fixed top-0 right-0  w-full'>
      <nav className=" flex justify-around items-center w-full">
         {/* Logo*/}
        <div>     
          <Link to= '/'>
            <img src="https://ik.imagekit.io/iixrkkdfp/Loja%20Games%20/vita.png?updatedAt=1725320162845" alt="" width={70} height={70} />
          </Link>
        </div>
         {/* Lista*/}
        <div className="flex items-center gap-x-4">
          <ul className='mx-3 md:flex gap-6 mx-0 *:font-bold hidden'>
            <li className="hover:underline cursor-pointer">Serviços</li>
            <li className="hover:underline cursor-pointer">Como Funciona</li>
            <li className="hover:underline cursor-pointer"><Link to='/sobre'>Quem Somos</Link></li>
            <li className="hover:underline cursor-pointer">Contato</li>
          </ul>
          <div className="flex items-center gap-x-2">
            <MagnifyingGlass size={20} className="hidden lg:block" />
            <form>
              <input type="text" name="" id="" placeholder="Busque um serviço" className="border border-green-500 rounded-xl px-2 py-1 hidden lg:block" />
            </form>
          </div>
        </div>
      
        <div className="flex items-center">
          {/* Botão Hamburguer*/}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={32} /> : <List size={32} />}
            </button>
          </div>
          {/* Login*/}
          <div className=" hidden md:flex items-center">
            <div><UserCircle size={32}/></div>
            <span className="mx-2 font-bold hover:underline cursor-pointer">Entre</span> ou 
            <span className="mx-2 font-bold hover:underline cursor-pointer">Cadastre-se</span>
          </div>
        </div>
     
        <ul className={`md:hidden space-y-4 px-4 mt-16 py-7 bg-green-500 ${isOpen ? 'block fixed top-0 right-0 left-0':'hidden'}`}>
            <li className="hover:underline cursor-pointer text-white" onClick={toggleMenu}>Serviços</li>
            <li className="hover:underline cursor-pointer text-white"onClick={toggleMenu}>Como Funciona</li>
            <li className="hover:underline cursor-pointer text-white"onClick={toggleMenu}><Link to='/sobre'>Quem Somos</Link></li>
            <li className="hover:underline cursor-pointer text-white"onClick={toggleMenu}>Contato</li>
        </ul>

      </nav>

    </header>
  );
}

export default Navbar

