import { Box } from '@mui/material'
import Buttons from './components/Buttons'
import Statistics from './components/Statistics'

const App = () => {
  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-start' }}>
      <Buttons />
      <Statistics />
    </Box>
  )
}

export default App
