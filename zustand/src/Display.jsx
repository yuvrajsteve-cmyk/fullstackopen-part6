import { Box, Typography } from '@mui/material'
import useCounterStore  from './Store'


const Display = () => {
    const counter = useCounterStore((state) => state.counter)
   
    return (
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
            boxShadow: 3
        }}>
            <Typography variant='h3' component='h1' color='secondary'>
                {counter}
            </Typography>
        </Box>
    )
}

export default Display