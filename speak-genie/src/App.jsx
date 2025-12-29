import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NowPlaying from './pages/NowPlaying'
import Quiz from './pages/Quiz'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path="/stories/:id" element={<NowPlaying />} />

       <Route path='/quiz' element = {<Quiz/>}/>
      </Routes>
      <Toaster position="top-center" />
    </>
  )
}

export default App
