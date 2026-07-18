import { Box, Button } from '@mui/material'
import useUnicafeStore from '../Store'

const Buttons = () => {
  const goodIncrement = useUnicafeStore((state) => state.goodIncrement)
  const neutralIncrement = useUnicafeStore((state) => state.neutralIncrement)
  const badIncrement = useUnicafeStore((state) => state.badIncrement)

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button variant="contained" color="success" onClick={goodIncrement}>Good</Button>
      <Button variant="contained" color="warning" onClick={neutralIncrement}>Neutral</Button>
      <Button variant="contained" color="error" onClick={badIncrement}>Bad</Button>
    </Box>
  )
}

export default Buttons
