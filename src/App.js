import './App.css'
import { Grommet } from 'grommet'
import Main from './components/Main'

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
   <Main />
  </Grommet>
 )
}

export default App
