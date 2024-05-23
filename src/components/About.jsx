import React from 'react'
import aboutSvg from '../assets/code-pair.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='Development Journey' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I am a self-taught web developer with a passion for creating dynamic
            and responsive web applications. My coding journey began about a
            year ago when I started with freeCodeCamp, where I built a solid
            foundation in HTML, CSS, and JavaScript. Since then, I have expanded
            my knowledge through various online courses and tutorials. After
            mastering the basics, I dove deeper into JavaScript and then
            advanced to learning React, which allowed me to understand the
            complexities of modern front-end development. Recently, I have been
            focusing on Next.js, which has enabled me to develop more
            sophisticated applications with features such as secure user
            authentication, transaction management, and real-time data updates.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
