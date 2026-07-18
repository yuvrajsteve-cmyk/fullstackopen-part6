import { Box, TableContainer, Table, TableBody, TableRow, TableCell, Paper, Typography } from '@mui/material'
import useUnicafeStore from '../Store'

const Statistics = () => {
  const good = useUnicafeStore((state) => state.good)
  const neutral = useUnicafeStore((state) => state.neutral)
  const bad = useUnicafeStore((state) => state.bad)

  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : (good / all) * 100

  const stats = [
    { label: 'Good', value: good, color: '#2e7d32' },
    { label: 'Neutral', value: neutral, color: '#ed6c02' },
    { label: 'Bad', value: bad, color: '#d32f2f' },
    { label: 'All', value: all, color: 'text.secondary' },
    { label: 'Average', value: average.toFixed(2), color: 'text.primary' },
    { label: 'Positive', value: `${positive.toFixed(1)}%`, color: '#0288d1' },
  ]

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      bgcolor: '#f4f9fd',
      borderRadius: 4,
      padding: 4,
      boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
      maxWidth: 400,
      width: '100%',
      gap: 2
    }}>
      <Typography 
        variant='h5' 
        component='h4'
        sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#1a365d' }}
      >
        statistics
      </Typography>
      
      <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
        <Table aria-label="statistics table">
          <TableBody>
            {stats.map((row, index) => (
              <TableRow 
                key={row.label}
                sx={{ 
                  bgcolor: index % 2 === 0 ? '#ffffff' : '#f8fafc',
                  transition: 'background-color 0.2s ease',
                  '&:hover': { bgcolor: '#f1f5f9' },
                  '&:last-child td': { borderBottom: 0 }
                }}
              >
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.95rem', py: 2 }}>
                  {row.label}
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, color: row.color, fontSize: '1rem', fontFamily: 'monospace', py: 2 }}>
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Statistics
