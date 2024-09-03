import { List, PlusSquare, UserCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {

  const [isOpen,setisOpen] = useState(false)

  function toggleMenu () {
    setisOpen(!isOpen)
  }
  
  return (
    <header className='flex justify-center shadow-md text-green-700 text-sm lg:text-base'>
      <nav className=" flex justify-around items-center w-full">
         {/* Logo*/}
        <div>     
          <Link to= '/'>
            <img src="https://ik.imagekit.io/iixrkkdfp/Loja%20Games%20/vita.png?updatedAt=1725320162845" alt="" width={70} height={70} />
          </Link>
        </div>
         {/* Lista*/}
        <div>
          <ul className={`mx-3 md:flex gap-6 mx-0 *:font-bold ${isOpen ? 'block' : 'hidden'}`}>
            <li className="hover:underline cursor-pointer">Serviços</li>
            <li className="hover:underline cursor-pointer">Como Funciona</li>
            <li className="hover:underline cursor-pointer"><Link to='/sobre'>Quem Somos</Link></li>
            <li className="hover:underline cursor-pointer">Contato</li>
          </ul>
        </div>
      
        <div className="flex items-center">
          {/* Botão Hamburguer*/}
          <div className="md:hidden">
            <List size={32} onClick={toggleMenu}/>
          </div>
          {/* Login*/}
          <div className=" hidden md:flex items-center">
            <div><UserCircle size={32}/></div>
            <span className="mx-2 font-bold hover:underline cursor-pointer">Entre</span> ou 
            <span className="mx-2 font-bold hover:underline cursor-pointer">Cadastre-se</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar

