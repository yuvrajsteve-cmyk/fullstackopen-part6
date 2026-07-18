import { Box, TextField, Button, List, ListItem, ListItemText, Typography, Paper } from '@mui/material'
import { useAnecdotes, useAnecdoteActions } from './store'

const App = () => {
  const anecdotes = useAnecdotes()
  const { voteAnecdote, createAnecdote } = useAnecdoteActions()

  const vote = id => {
    voteAnecdote(id)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if (content.trim()) {
      createAnecdote(content)
      event.target.reset()
    }
  }

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      bgcolor: '#f1f5f9', 
      pt: 6,
      px: 2
    }}>
      <Paper elevation={0} sx={{ 
        p: 4, 
        maxWidth: 550, 
        width: '100%', 
        borderRadius: 4, 
        bgcolor: '#ffffff',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0',
        display: 'flex', 
        flexDirection: 'column', 
        gap: 4 
      }}>
        
        <Box>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 800, color: '#1e293b', letterSpacing: -0.5, mb: 2 }}>
            Anecdotes
          </Typography>

          <List disablePadding sx={{ 
            border: '1px solid #f1f5f9', 
            borderRadius: 3, 
            overflow: 'hidden',
            bgcolor: '#ffffff'
          }}>
            {anecdotes.map((anecdote, index) => (
              <ListItem 
                key={anecdote.id} 
                divider={index !== anecdotes.length - 1}
                sx={{ 
                  py: 2, 
                  px: 2.5,
                  borderColor: '#f1f5f9',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'background-color 0.2s',
                  '&:hover': { bgcolor: '#f8fafc' }
                }}
              >
                <ListItemText 
                  primary={
                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#334155', wordBreak: 'break-word', mb: 0.5 }}>
                      {anecdote.content}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#64748b' }}>
                      has {anecdote.votes} votes
                    </Typography>
                  }
                />
                <Button 
                  variant="contained" 
                  disableElevation
                  size="small"
                  onClick={() => vote(anecdote.id)}
                  sx={{ 
                    borderRadius: 2, 
                    px: 2.5, 
                    py: 0.75,
                    fontWeight: 600,
                    textTransform: 'none',
                    bgcolor: '#2563eb',
                    '&:hover': { bgcolor: '#1d4ed8' }
                  }}
                >
                  Vote
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700, color: '#1e293b', mb: 2 }}>
            Create New
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
            <TextField 
              name="anecdote" 
              label="Write a new anecdote..." 
              variant="outlined" 
              size="small" 
              fullWidth 
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2.5,
                  bgcolor: '#f8fafc',
                  '& fieldset': { borderColor: '#e2e8f0' },
                  '&:hover fieldset': { borderColor: '#cbd5e1' },
                }
              }}
            />
            <Button 
              type="submit" 
              variant="contained" 
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

      </Paper>
    </Box>
  )
}

export default App
