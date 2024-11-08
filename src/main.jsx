import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// css
import './index.css'

// app
import App from './App.jsx'

// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// provider
import { Provider } from 'react-redux'

// pages
import HomePage from './pages/HomePage.jsx' 
import ProfilePage from './pages/ProfilePage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

// store
import store from './store/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      }
    ]
  }
])

// 3.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
