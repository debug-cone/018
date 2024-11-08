// redux selector dispatch
import { useDispatch, useSelector } from "react-redux"
import { logoutUserAction } from "../store/userSlice"

// navigate
import { useNavigate } from 'react-router-dom'

function ProfilePage() {

  const {user} = useSelector((state) => state.userStore)
  
  const dispatch = useDispatch(logoutUserAction())
  const navigate = useNavigate()

  function handleLogout() {
    // 1 delete redux_user from local storage update initial state user
    dispatch(logoutUserAction())
    // 2 redirect to '/'
    setTimeout(() => {
      navigate('/register')
    }, 1000)
  }

  return (
    <div className="container mx-auto flex flex-col justify-center items-center md:flex-row mt-[50px] gap-[20px]">
        <img 
        className="w-[200px] h-[200px] rounded-full object-cover"
        src={user.image} 
        alt={user.firstName} 
        />

        <div className="bg-blue-300 w-full p-[20px] rounded-[20px] flex flex-col items-start gap-[20px]">
          <h3 className="font-semibold text-white">First Name: {user.firstName}</h3>
          <h3 className="font-semibold text-white">Last Name: {user.lastName}</h3>
          <h4 className="font-semibold text-white">Birth Date: {user.birthDate}</h4>
          <h4 className="font-semibold text-white">E-Mail: {user.email}</h4>
          <h4 className="font-semibold text-white">Gender: {user.gender}</h4>

          <button
          className="px-[20px] py-[12px] bg-blue-600 rounded-lg text-white font-bold uppercase"
          onClick={handleLogout}
          >
            Logout
          </button>
        </div>
    </div>
  )
}

export default ProfilePage