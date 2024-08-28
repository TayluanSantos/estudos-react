import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Sobre() {
  return (
    <div className=' flex flex-col place-items-center text-center px-20 py-20 w-full'>
        <h1 className='text-4xl font-bold mb-5 text-green-2'>Quem Somos</h1>
        <div className='max-w-screen-lg text-center'>
            <p className='text-lg mb-5'>  Somos um grupo de estudantes do bootcamp da Generation Brasil, apaixonados por tecnologia e inovação.
                Nosso objetivo é criar soluções que impactem positivamente a vida das pessoas, utilizando as mais recentes tecnologias e melhores práticas de desenvolvimento de software. 
                Com uma formação diversa, trazemos diferentes perspectivas e habilidades para nossos projetos, o que nos permite abordar problemas de forma criativa e eficaz.
            </p>
        </div>
    <div className=' flex flex-wrap justify-center gap-5 py-10 bg-green-1 w-11/12'>

         <div className='
             w-72
             bg-white
            hover:bg-green-2
             hover:text-white
             cursor-pointer
             drop-shadow-xl
             rounded-md 
             flex flex-col 
             gap-5 py-10
             hover:scale-105
             transition 
             duration-300 
             ease-in-out'>
             <div className='flex justify-center'>
                 <img className="mx-auto h-40 w-40 rounded-full object-cover"src="../src/assets/lari.png" alt="" />
             </div>
             <div>
                 <p className='font-bold text-lg'>Larissa Angioni</p>
                 <p className='text-md'>Desenvolvedora Fullstack</p>
             </div>
             <div className='flex justify-center'>
                 <GithubLogo size={32} />
                 <LinkedinLogo size={32} />
             </div>
         </div>
         <div className='
             w-72
             bg-white
             hover:bg-green-2
             hover:text-white
             cursor-pointer
             drop-shadow-xl
             rounded-md 
             flex flex-col 
             gap-5 py-10
             hover:scale-105 
             transition 
             duration-300 
             ease-in-out'>
             <div className='flex justify-center'>
                 <img className="mx-auto h-40 w-40 rounded-full object-cover"src="../src/assets/clara.png" alt="" />
             </div>
             <div>
                 <p className='font-bold text-lg'>Clara Araújo</p>
                 <p className='text-md'>Desenvolvedora Fullstack</p>
             </div>
             <div className='flex justify-center'>
                 <GithubLogo size={32} />
                 <LinkedinLogo size={32} />
             </div>
         </div>
         <div className='
             w-72
             bg-white
            hover:bg-green-2
             hover:text-white
             cursor-pointer
             drop-shadow-xl
             rounded-md 
             flex flex-col 
             gap-5 py-10
             hover:scale-105 
             transition 
             duration-300 
             ease-in-out'>
             <div className='flex justify-center'>
                 <img className="mx-auto h-40 w-40 rounded-full object-cover"src="../src/assets/pamela.jpg" alt="" />
             </div>
             <div>
             <div>
                 <p className='font-bold text-lg'>Pamela Salgado</p>
                 <p className='text-md'>Desenvolvedora Fullstack</p>
             </div>
             </div>
             <div className='flex justify-center'>
                 <GithubLogo size={32} />
                 <LinkedinLogo size={32} />
             </div>
         </div>
         <div className='
             w-72
             bg-white
            hover:bg-green-2
             hover:text-white
             cursor-pointer
             drop-shadow-xl
             rounded-md 
             flex flex-col 
             gap-5 py-10
             hover:scale-105 
             transition 
             duration-300 
             ease-in-out'>
             <div className='flex justify-center'>
                 <img className="mx-auto h-40 w-40 rounded-full object-cover"src="../src/assets/paulo.jpg" alt="" />
             </div>
             <div>
                 <p className='font-bold text-lg'>Paulo Dante</p>
                 <p className='text-md'>Desenvolvedor Fullstack</p>
             </div>
             <div className='flex justify-center'>
                 <GithubLogo size={32} />
                 <LinkedinLogo size={32} />
             </div>
         </div>
         <div className='
             w-72
             bg-white
              hover:bg-green-2
             hover:text-white
             cursor-pointer
             drop-shadow-xl
             rounded-md 
             flex flex-col 
             gap-5 py-10
             hover:scale-105 
             transition 
             duration-300 
             ease-in-out'>
             <div className='flex justify-center'>
                 <img className="mx-auto h-40 w-40 rounded-full object-cover"src="../src/assets/tayluan.png" alt="" />
             </div>
             <div>
                 <p className='font-bold text-lg'>Tayluan Santos</p>
                 <p className='text-md'>Desenvolvedor Fullstack</p>
             </div>
             <div className='flex justify-center'>
                 <GithubLogo size={32} />
                 <LinkedinLogo size={32} />
             </div>
         </div>
    </div>
 </div>
  )
}

export default Sobre