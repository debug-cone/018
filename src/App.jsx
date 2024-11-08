// outlet
import { Outlet } from 'react-router-dom'

// dispatch
import { useDispatch } from 'react-redux'
import { restoreUserAction } from './store/userSlice'

// react
import { useEffect } from 'react'

// css
import './App.css'

// components
import FormComponent from './components/FormComponent'
import NavbarComponent from './components/NavbarComponent'

function App() {

  // restore user on reload
  const dispatch = useDispatch()

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('redux_user'))

    dispatch(restoreUserAction(user))
  }, [])

  return (
    <div className='h-[100vh] bg-neutral-800 px-[20px]'>
      <NavbarComponent />

      {/* <FormComponent /> */}
      <Outlet />
    </div>
  )
}

export default App
