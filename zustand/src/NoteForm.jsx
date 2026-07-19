import { Box, TextField, Button } from '@mui/material'
import { useNoteActions } from './useNoteStore'

const NoteForm = () => {
    const { add } = useNoteActions()

    const generatedId = () => Number((Math.random() * 1000000).toFixed(0))

    const addNote = (e) => {
    e.preventDefault()
    const content = e.target.elements.note.value
    if (!content.trim()) return
    add({ id: generatedId(), content, important: false })
    e.target.reset()
  }

    return(
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
    )
}

export default NoteForm