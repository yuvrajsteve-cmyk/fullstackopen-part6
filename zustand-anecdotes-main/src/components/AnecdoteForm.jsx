import { Box, TextField, Button, Typography } from '@mui/material'
import { useAnecdoteActions } from '../store'

const AnecdoteForm = () => {
    const { createAnecdote } = useAnecdoteActions()

    const handleSubmit = event => {
        event.preventDefault()
        const content = event.target.anecdote.value 
        if(content.trim()) {
            createAnecdote(content)
            event.target.reset()
        }
    }

    return(
        <Box>
            <Typography variant='h5' component='h2'
            sx={{
                fontWeight: 700,
                color: '#1e293b',
                mb: 2
            }}>
                Create New
            </Typography>

            <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', gap: 1.5}}>
                <TextField 
                name='anecdote'
                label='Write a new anecdote...'
                variant='outlined'
                size='small'
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 2.5,
                        bgcolor: '#f8fafc',
                        '& fieldset': { borderColor: '#e2e8f0'},
                        '&:hover fieldset': { borderColor: '#cbd5e1'},
                    }
                }}
                />
                <Button
                type='submit'
                variant='contained'
                disableElevation
                sx={{
                    borderRadius: 2.5,
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    textTransform: 'none',
                    bgcolor: '#10b981',
                    '&:hover': { bgcolor: '#059669' }
                 }}
                 >
                    Create
                    </Button>
            </Box>
        </Box>
    )
}

export default AnecdoteForm