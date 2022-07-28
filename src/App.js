import { Container } from '@mui/material'
import Navbar from './components/Navbar'
import Results from './components/Results'

const App = () => {
  return (
    <div style={{
      backgroundColor: '#DCDCDC',
      height: '100vh',
      width: '100vw'
    }}
    >
      <Navbar />
      <Container>
        <Results />
      </Container>
    </div>
  )
}

export default App
