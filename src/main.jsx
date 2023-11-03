import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './Providers/AuthProvider';
import CheckOut from './Pages/CheckOut/CheckOut';
import BookService from './Pages/BookService/BookService';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "/book/:id",
        element: <BookService></BookService>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      }
      // {
      //   path: "/checkout/:id",
      //   element: <CheckOut></CheckOut>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>


)
