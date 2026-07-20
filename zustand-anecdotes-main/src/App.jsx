import { Box, Typography, Paper } from '@mui/material'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'

const App = () => {
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
          <Filter />
          <AnecdoteList />
        </Box>

        <AnecdoteForm />

      </Paper>
      
    </Box>
  )
}

export default App
