// router
import { NavLink } from 'react-router-dom'

function NavbarComponent() {
  return (
    <div className='container mx-auto flex items-center justify-between h-[120px]'>
        <h1 className='text-blue-600 uppercase text-4xl font-extrabold'>Redux</h1>

        <ul className='flex gap-[20px]'>
            <li>
                <NavLink 
                to={'/'} 
                className='text-blue-400 text-[18px] font-bold uppercase hover:text-blue-600'
                >
                    Home</NavLink>
            </li>

            {
                localStorage.hasOwnProperty('redux_user')
                ?
                <li>
                    <NavLink 
                    to={'/profile'} 
                    className='text-blue-400 text-[18px] font-bold uppercase hover:text-blue-600'
                    >
                        Profile
                    </NavLink>
                </li>
                :
                <li>
                    <NavLink 
                    to={'/register'} 
                    className='text-blue-400 text-[18px] font-bold uppercase hover:text-blue-600'
                    >
                        Register
                    </NavLink>
                </li>
            }
        </ul>
    </div>
  )
}

export default NavbarComponent