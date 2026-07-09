import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import About from './components/Home/About.jsx'
// import Home from './components/Home/Home.jsx'
// import Contact from './components/Home/Contact.jsx'
// import User from './User/User.jsx'
// import Github, { ApiCallerLoader } from './User/Github.jsx'
import App from './App.jsx'


// const router = createBrowserRouter(
//  createRoutesFromElements(
//   <Route path="/" element={<Layout />}>
//     <Route path="" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/contact" element={<Contact />} />
//     < Route path="/user/:id" element={<User />} />
//     <Route
    
//     // fast way to call Api better than useEffect and useState
//     loader={ApiCallerLoader}
  
    
//     path="/github" element={<Github />} />
//   </Route> 
//  )
// )




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //<RouterProvider router={ router}></RouterProvider> */}
   <App/>
  </StrictMode>,
)
