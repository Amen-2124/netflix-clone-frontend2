import { useState } from 'react'

import './App.css'
import Header from '../src/Components/Header/Header'
import  Banner from '../src/Components/Banner/Banner'
import DisplayRow from '../src/Components/DisplayRow/DisplayRow'
import Footer from '../src/Components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Banner/>
     <DisplayRow/>
     <Footer/>
    </>
  )
}

export default App
