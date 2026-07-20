import { Box, Typography, Paper } from '@mui/material'
import NoteForm from './NoteForm'
import VisibilityFilter from './VisibilityFilter'
import NoteList from './NoteList'
import { useEffect } from 'react'
import { useNoteActions } from './useNoteStore'

const App = () => {
  const { initialize } = useNoteActions()

  useEffect(() => {
      initialize.getAll()
      .then(notes => (initialize(notes)))
  }, [initialize])

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

        <NoteForm />
        
        <VisibilityFilter />

        <NoteList />
        
      </Paper>
    </Box>
  )
}

export default App
