import React from 'react'

const SkillsCard = ({ icon, title, text, icon2 }) => {
  return (
    <article>
      {' '}
      <span className='flex flex-row gap-5'>
        {icon}
        {icon2}
      </span>
      <h4 className='font-bold mt-6'>{title}</h4>
      <p className='mt-2 text-slate-500'>{text}</p>
    </article>
  )
}

export default SkillsCard
