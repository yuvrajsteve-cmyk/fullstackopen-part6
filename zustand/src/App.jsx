import { create } from 'zustand'
import {Box, Button, Typography, Stack} from '@mui/material'
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


  return (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    p: 3,
    my: 2,
    bgcolor: 'primary.main',
    color: 'primary.contrastText',
    borderRadius: 2,
    boxShadow: 2,
    gap: 3
  }}>
    
    <Typography variant='h3' component='h1'>
      {counter}
    </Typography>

    <Stack direction='row' spacing={2}>
      <Button variant='contained' color='secondary' onClick={increment}>
        plus
      </Button>
      <Button variant='contained' color='secondary' onClick={decrement}>
        minus
      </Button>
      <Button variant='outlined' color='inherit' onClick={setToZero}>
        zero
      </Button>
    </Stack>

  </Box>
);
}

export default App


