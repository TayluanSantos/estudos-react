import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import React from 'react'

function About() {
  return (
        <div className='container my-11 text-center px-20 py-10 w-4/5 '>
           <h1 className='text-4xl font-bold'>Quem Somos</h1>
           <p>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Maxime quisquam molestias rem delectus soluta doloremque, distinctio id repellat, facere et cum dignissimos earum,
                minus exercitationem culpa aliquid harum voluptate iusto.
            </p>
           <div className=' flex flex-row justify-center gap-4 flex-wrap py-10 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3'>

                <div className='
                    w-96
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
                        <img className="mx-auto h-40 w-40 rounded-full object-cover"src="../src/assets/profile-pic.avif" alt="" />
                    </div>
                    <div>
                        <p>Nome da Pessoa</p>
                        <p>Função</p>
                    </div>
                    <div className='flex justify-center'>
                        <GithubLogo size={32} />
                        <LinkedinLogo size={32} />
                    </div>
                </div>
                <div className='
                    w-96
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
                        <img className="mx-auto h-40 w-40 rounded-full object-cover"src="../src/assets/profile-pic.avif" alt="" />
                    </div>
                    <div>
                        <p>Nome da Pessoa</p>
                        <p>Função</p>
                    </div>
                    <div className='flex justify-center'>
                        <GithubLogo size={32} />
                        <LinkedinLogo size={32} />
                    </div>
                </div>
                <div className='
                    w-96
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
                        <img className="mx-auto h-40 w-40 rounded-full object-cover"src="../src/assets/profile-pic.avif" alt="" />
                    </div>
                    <div>
                        <p>Nome da Pessoa</p>
                        <p>Função</p>
                    </div>
                    <div className='flex justify-center'>
                        <GithubLogo size={32} />
                        <LinkedinLogo size={32} />
                    </div>
                </div>
                <div className='
                    w-96
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
                        <img className="mx-auto h-40 w-40 rounded-full object-cover"src="../src/assets/profile-pic.avif" alt="" />
                    </div>
                    <div>
                        <p>Nome da Pessoa</p>
                        <p>Função</p>
                    </div>
                    <div className='flex justify-center'>
                        <GithubLogo size={32} />
                        <LinkedinLogo size={32} />
                    </div>
                </div>
                <div className='
                    w-96
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
                        <img className="mx-auto h-40 w-40 rounded-full object-cover"src="../src/assets/profile-pic.avif" alt="" />
                    </div>
                    <div>
                        <p>Nome da Pessoa</p>
                        <p>Função</p>
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