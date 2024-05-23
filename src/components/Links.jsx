import { links } from '../data'

const Links = () => {
  return (
    <>
      {links.map((link) => {
        const { id, href, text } = link
        return (
          <a
            href={href}
            key={id}
            className='capitalize text-lg tracking-wide hover:text-cyan-700 duration-300'
          >
            {text}
          </a>
        )
      })}
    </>
  )
}
export default Links
