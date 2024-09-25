import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import ColorPicker from './ColorPicker'
function App() {

  return (
    <>
      <Header />
      <ColorPicker />
      <Footer />
    </>
  )
}

export default App