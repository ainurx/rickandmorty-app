import { Container } from '@mui/material'
import './App.css'

import Navbar from './components/Navbar'
import SearchAndFilter from './components/SearchAndFilter'
import RMMasonry from './components/RMMasonry'

function App() {

  return (
    <>
      <Navbar/>
      <Container className='content-container'>
        <SearchAndFilter/>
        <RMMasonry/>
      </Container>
    </>
  )
}

export default App
