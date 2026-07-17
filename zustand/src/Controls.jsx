import  useCounterStore  from './Store'
import { Box, Button } from '@mui/material'

const Controls = () => {
    const { increment, decrement, setToZero } = useCounterStore()

    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: "primary.main",
            color: 'primaryContrastText',
            gap: 4,
            my: 2,
            p: 3,
            borderRadius: 3,
            boxShadow: 3,
        }}>
            <Button variant='contained' color='inherit' onClick={increment}>Plus</Button>
            <Button variant='contained' color='inherit' onClick={decrement}>Minus</Button>
            <Button variant='outlined' color='inherit' onClick={setToZero}>Zero</Button>
        </Box>
    )
}

export default Controls