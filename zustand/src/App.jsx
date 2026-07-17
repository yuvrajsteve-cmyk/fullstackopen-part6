import { create } from 'zustand'
import {Box, Button, Typography} from '@mui/material'
const useCounterStore = create (set => ({
  counter: 0,
  increment: () => set(state => ({counter: state.counter + 1})),
  decrement: () => set(state => ({counter: state.counter - 1})),
  setToZero: () => set(state => ({counter: state.counter = 0})),

}))

const App = () => {
   const counter = useCounterStore(state => state.counter)
   const increment = useCounterStore(state => state.increment)
   const decrement = useCounterStore(state => state.decrement)
   const setToZero = useCounterStore(state => state.setToZero)


  return(
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      p: '3',
      my: '2',
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
      borderRadius: '2',
      boxShadow: '2'
    }}>
        <div>
          <Typography variant='h3'>
            {counter}
          </Typography>
        </div>
        <div>
          <Button variant='contained' onClick={increment}>plus</Button>
          <Button variant='contained' onClick={decrement}>minus</Button>
          <Button variant='contained' onClick={setToZero}>zero</Button>
        </div>
    </Box>
  )
}

export default App