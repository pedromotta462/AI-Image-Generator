import React from 'react'
import { BrowserRouter, Form, Link, Route, Routes } from 'react-router-dom';

import { logo, logo2 } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-[#f1f1f1] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">

        <Link to="/" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-500">Home</Link>
        <Link className="flex cursor-auto">
          <img src={logo2} alt="logo" className="w-28 object-contain mr-4" />
          <img src={logo} alt="Mylogo" className="w-28 object-contain" />
        </Link>
        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-500">Create</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App