import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectsCard = ({ img, url, github, title, text, tech, note }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <img
        src={img}
        className='w-full object-cover rounded-t-lg h-64'
        alt={title}
      />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium flex flex-row items-center gap-5'>
          {title}
          {tech}
        </h2>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>

      <div className='align-element'>{note}</div>
    </article>
  )
}

export default ProjectsCard