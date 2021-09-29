import './App.css'
import { Grommet } from 'grommet'

const theme = {
 global: {
  font: {
   family: 'Poppins',
  },
 },
}

function App() {
 return (
  <Grommet theme={theme}>
   <p>ANZSIC Fairy</p>
  </Grommet>
 )
}

export default App
