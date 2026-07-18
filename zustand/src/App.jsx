

import { Box, TextField, Button, List, ListItem, ListItemText, Paper,TableContainer } from '@mui/material'
import { useNotes, useNoteActions } from './useNoteStore'

const App = () => {
  const notes = useNotes()
  const { add } = useNoteActions()
  
  const generatedId = () => Number((Math.random() * 1000000).toFixed(0))

  const addNote = (e) => {
    e.preventDefault()
    const content = e.target.value 
    add({ id: generatedId(), content, important: false})
    e.target.reset()
  }

  return(
     <Box sx={{ p: 3, maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 3 }}>
      

      <Box component="form" onSubmit={addNote} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <TextField 
          name="note" 
          label="Note" 
          variant="outlined" 
          size="small" 
          fullWidth 
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Box>

    
      <TableContainer component={Paper} elevation={1} sx={{ borderRadius: 2 }}>
        <List disablePadding>
          {notes.map((note, index) => (
            <ListItem 
              key={note.id} 
              divider={index !== notes.length - 1}
              sx={{ py: 1.5 }}
            >
             
              <ListItemText 
                primary={note.content}
                primaryTypographyProps={{
                  variant: note.important ? 'h6' : 'body1',
                  fontWeight: note.important ? 700 : 400,
                  color: note.important ? 'primary.main' : 'text.primary'
                }}
              />
            </ListItem>
          ))}
        </List>
      </TableContainer>

    </Box>
  )
}

export default App