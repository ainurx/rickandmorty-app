import { Container } from '@mui/material'
import './App.css'

import Navbar from './components/Navbar'
import RMMasonry from './components/RMMasonry'

function App() {

  return (
    <>
      <Navbar/>
      <Container className='content-container'>
        <RMMasonry/>
      </Container>
    </>
  )
}

export default App
