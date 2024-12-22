
import About from './About';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import ParamComp from './ParamComp';
import Course from './Componets_About/Course';
import Mock_test from './Componets_About/Mock_test';
import Reports from './Componets_About/Reports';
import PageNotFound from './PageNotFound';
const router=createBrowserRouter(
[
  {path:"/",
    element:
    <div>
         <Navbar/>
         <Home/>
    </div>
   

  },
//nested Routes like =>  /about/course
  {path:"/about",
    element:  <div>
    <Navbar/>
    <About/>
</div>,
children:[
  {
    path:'course',
    element: <Course/>
    
  },
  {
    path:'mock-test',
    element: <Mock_test/>
  },
  {
    path:'report',
    element: <Reports/>
  }
]

  },   //About End


  {path:"/contact",
    element:  <div>
    <Navbar/>
    <Contact/>
</div>

  }, 

  {path:"/student/:id",
    element:  <div>
    <Navbar/>
    <ParamComp/>
</div>

  },
  {
    path:'*',
    element:<PageNotFound/> 
  } //{/* for page not found */}

]
);


 
 function App() {
 
   return (
     <div>
   
       <RouterProvider router={router}/>
     </div>
   )
 }
 
 export default App
 