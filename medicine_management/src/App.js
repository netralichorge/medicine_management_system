import logo from './logo.svg';
import './App.css';
import Medicine from './component/Medicines/Medicine';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './component/Navbar';

const routes = createBrowserRouter([

  {
    path:"medicine",
    element:<> <Medicine/> <Navbar/> </>
  },
  {
    path:"navbar",
    element:<> <Navbar/> </>
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
