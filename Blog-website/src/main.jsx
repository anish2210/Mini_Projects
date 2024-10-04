import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Home } from './Pages/Home';
import { Blog } from './Pages/Blog';
import { AllBlogs } from './Pages/AllBlogs';
import { BlogInfo } from './Pages/BlogInfo';
import { AdminLogin } from './Pages/admin/AdminLogin';
import { Dashboard } from './Pages/admin/Dashboard';
import { NoPage } from './Pages/NoPage';
import { CreateBlog } from './Pages/admin/CreateBlog.jsx';
import { ProtectedRoute } from './App.jsx';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path="" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>
          } />
          <Route path="/createblog" element={
           <ProtectedRoute>
             <CreateBlog/>
           </ProtectedRoute>
             }/>

          <Route path="/*" element={<NoPage />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
<RouterProvider router={router}/>
      
    </ThemeProvider>
  </React.StrictMode>,
)
