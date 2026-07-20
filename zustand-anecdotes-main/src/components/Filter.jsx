import { Box, TextField } from '@mui/material'
import { useAnecdoteActions } from '../store'
 
const Filter = () => {
    const { setFilter } = useAnecdoteActions()

    const handleChange = event => {
        setFilter(event.target.value)
    }

    return (
        <Box>
            <TextField onChange={handleChange}  
                name='anecdote'
                label='filter'
                variant='outlined'
                size='small'
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 2.5,
                        marginBottom: 2,
                        bgcolor: '#f8fafc',
                        '& fieldset': { borderColor: '#e2e8f0'},
                        '&:hover fieldset': { borderColor: '#cbd5e1'},
                    }
                }} />
        </Box>
    )
}

export default Filter
