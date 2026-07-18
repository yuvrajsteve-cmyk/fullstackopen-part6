import { Box, TextField, Button, List, ListItem, ListItemText, Typography, Paper } from '@mui/material'
import { useNotes, useNoteActions } from './useNoteStore'

const App = () => {
  const notes = useNotes()
  const { add } = useNoteActions()
  
  const generatedId = () => Number((Math.random() * 1000000).toFixed(0))

  const addNote = (e) => {
    e.preventDefault()
    const content = e.target.elements.note.value
    if (!content.trim()) return
    add({ id: generatedId(), content, important: false })
    e.target.reset()
  }

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      bgcolor: '#f1f5f9', 
      pt: 8,
      px: 2
    }}>
      <Paper elevation={0} sx={{ 
        p: 4, 
        maxWidth: 480, 
        width: '100%', 
        borderRadius: 4, 
        bgcolor: '#ffffff',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0',
        display: 'flex', 
        flexDirection: 'column', 
        gap: 3 
      }}>
        
        <Typography variant="h5" component="h1" sx={{ fontWeight: 800, color: '#1e293b', letterSpacing: -0.5 }}>
          My Notes
        </Typography>

        <Box component="form" onSubmit={addNote} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
          <TextField 
            name="note" 
            label="Write a note..." 
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
              bgcolor: '#2563eb',
              '&:hover': { bgcolor: '#1d4ed8' }
            }}
          >
            Add
          </Button>
        </Box>

        {notes.length > 0 && (
          <List disablePadding sx={{ 
            border: '1px solid #f1f5f9', 
            borderRadius: 3, 
            overflow: 'hidden',
            bgcolor: '#ffffff'
          }}>
            {notes.map((note, index) => (
              <ListItem 
                key={note.id} 
                divider={index !== notes.length - 1}
                sx={{ 
                  py: 1.75, 
                  px: 2.5,
                  borderColor: '#f1f5f9',
                  transition: 'background-color 0.2s',
                  '&:hover': { bgcolor: '#f8fafc' }
                }}
              >
                <ListItemText 
                  primary={
                    <Typography 
                      variant={note.important ? 'body1' : 'body2'} 
                      sx={{ 
                        fontWeight: note.important ? 700 : 500,
                        color: note.important ? '#2563eb' : '#334155',
                        wordBreak: 'break-word'
                      }}
                    >
                      {note.content}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  )
}

export default App
