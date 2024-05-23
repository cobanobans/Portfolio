import heroImg from '../assets/hero-code.svg'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='bg-cyan-100 h-screen py-60' id='home'>
      <div className='align-element flex flex-row gap-40 items-center '>
        <article>
          <h1 className='text-7xl text-slate-600 font-bold tracking-wider'>
            I'm Đorđe
          </h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            web developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            Crafting dynamic web experiences from concept to reality.
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a
              href='https://github.com/cobanobans'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare className=' text-slate-500 hover:text-black duration-300 h-8 w-8' />
            </a>
            <a href=''>
              <FaLinkedin className=' text-slate-500 hover:text-black duration-300 h-8 w-8' />
            </a>
            <a href=''>
              <FaTwitterSquare className=' text-slate-500 hover:text-black duration-300 h-8 w-8' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-60' alt='' />
        </article>
      </div>
      <div className='align-element mt-5'>
        <a href='#skills'>
          <button className='btn bg-cyan-700 text-white border-0 hover:bg-slate-600'>
            More About Me
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero
