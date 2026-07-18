import { Box, Button } from '@mui/material'
import { create } from 'zustand'

const useUnicafeStore = create(Set => ({
    good: 0,
    neutral: 0,
    bad: 0,

    goodIncrement: () => Set(state => ({ good: state.good + 1 })),
    neutralIncrement: () => Set(state => ({ neutral: state.neutral + 1 })),
    badIncrement: () => Set(state => ({ bad: state.bad + 1 }))
}))

const App = () => {
  const good = useUnicafeStore((state) => state.good)
  const neutral = useUnicafeStore((state) => state.neutral)
  const bad = useUnicafeStore((state) => state.bad)
  const goodIncrement = useUnicafeStore((state) => state.goodIncrement)
  const neutralIncrement = useUnicafeStore((state) => state.neutralIncrement)
  const badIncrement = useUnicafeStore((state) => state.badIncrement)

  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : (good / all) * 100
  

  return(
    <Box>
      <h1>Good {good}</h1>
      <h1>Neutral {neutral}</h1>
      <h1>Bad {bad}</h1>
      <h1>all {all}</h1>
      <h1>average {average.toFixed(2)}</h1>
      <h1>positive {positive.toFixed(1)}%</h1>
     

      <Button onClick={goodIncrement}>Good</Button>
      <Button onClick={neutralIncrement}>Neutral</Button>
      <Button onClick={badIncrement}>Bad</Button>

    </Box>
  )
}

export default App