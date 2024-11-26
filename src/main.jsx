import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './assets/Components/AddCoffee.jsx';
import UpdateCoffee from './assets/Components/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
  },
  {
    path:"addcoffee",
    element: <AddCoffee></AddCoffee>
  }, 
  {
    path:"updatecoffee",
    element: <UpdateCoffee></UpdateCoffee>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
