import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>


)
