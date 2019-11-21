import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faHome, faCoffee } from '@fortawesome/free-solid-svg-icons'

const links = [
  { href: '/about', icon: faCoffee, classes: 'flex w-full justify-center h-16 p-4 hover:bg-indigo-400' },
  { href: '/code', icon: faCode, classes: 'flex w-full justify-center h-16 p-4 hover:bg-indigo-400' }

]

export const Nav = () => {
  return (
    <div className='flex h-screen flex-col w-1/12 bg-gray-800 items-center'>
      <Link passHref href='/'>
        <a className='flex w-full justify-center h-16 p-4 hover:bg-indigo-400'>
          <FontAwesomeIcon size='lg' icon={faHome} />
        </a>
      </Link>
      {links.map(link => <NavLink key={link.href} {...link} />)}
    </div>
  )
}

const NavLink = ({ classes, href, icon }) => (
  <Link passHref href={href}><a className={classes} href={href}><FontAwesomeIcon size='lg' icon={icon} /></a></Link>
)
