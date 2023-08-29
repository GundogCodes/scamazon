import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import routes from './router/routes'
function App() {

  return (
    <>
    <NavBar routes={routes} />
    <div className='tempDiv'>
      <h1>WELCOME TO SCAMAZON</h1>
      <h3>By, Alex, Andrew, Bao, Gunish, Jeff, Sapana, TJ</h3>
    </div>
    </>
  )
}

export default App
