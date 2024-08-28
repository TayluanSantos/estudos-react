import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import React from 'react'

function About() {
  return (
        <div className='container my-11 text-center px-20 py-10 w-full '>
           <h1 className='text-4xl font-bold'>Quem Somos</h1>
           <p>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Maxime quisquam molestias rem delectus soluta doloremque, distinctio id repellat, facere et cum dignissimos earum,
                minus exercitationem culpa aliquid harum voluptate iusto.
            </p>
           <div className=' flex flex-row justify-center gap-5 flex-wrap py-10 '>

                <div className='
                    w-72
                    bg-white
                    hover:bg-emerald-600
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
                    hover:bg-emerald-600
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
                    hover:bg-emerald-600
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
                    hover:bg-emerald-600
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
                    hover:bg-emerald-600
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

export default About