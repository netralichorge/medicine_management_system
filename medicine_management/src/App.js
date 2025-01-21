import logo from './logo.svg';
import './App.css';
import Medicine from './component/Medicines/Medicine';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './component/Navbar';
import React from 'react';
import UserRegistration from './component/UserRegistration';

const routes = createBrowserRouter([

  {
    path:"medicine",
    element:<> <Navbar/> <Medicine/>  </>
  },
  {
    path:"/",
    element:<> <Navbar/> </>
  },
  {
    path:"registration",
    element:<> <UserRegistration/> </>
  }
])

function App() {
  return (
    <div className="">

      <RouterProvider router={routes}/>
      
    </div>
  );
}

export default App;
