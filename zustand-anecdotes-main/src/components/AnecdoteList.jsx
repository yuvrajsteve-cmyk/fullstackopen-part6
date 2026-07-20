import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material'
import { useAnecdotes, useFilter, useAnecdoteActions } from '../store'

const AnecdoteList = () => {
    const anecdotes = useAnecdotes()
    const filter = useFilter()
    const { voteAnecdote } = useAnecdoteActions()

    const filteredAnecdotes = anecdotes.filter(anecdote => 
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )

    const sortedAnecdots = filteredAnecdotes.toSorted((a,b) => b.votes - a.votes)

    return(
        <Box>
            <List disablePadding sx={{
                border: '1px solid #f1f5f9',
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: '#ffffff'
            }}>
                {sortedAnecdots.map((anecdote, index) => (
                    <ListItem
                    key={anecdote.id}
                    divider={index !== sortedAnecdots.length - 1 }
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
                    }}>
                        <ListItemText 
                        primary={
                            <Typography variant='body1' sx={{
                                fontWeight: 500,
                                color: '#334155',
                                wordBreak: 'break-word',
                                mb: 0.5
                            }}>{anecdote.content}</Typography>
                        }
                        secondary={
                            <Typography variant='body2' sx={{
                                fontWeight: 600,
                                color: '#64748b'
                            }}>has {anecdote.votes} votes
                            </Typography>
                        }
                        />
                        <Button variant='contained'
                        disableElevation
                        size='small'
                        onClick={() => voteAnecdote(anecdote.id)}
                        sx={{
                            borderRadius: 2,
                            px: 2.5,
                            py: 0.75,
                            fontWeight: 600,
                            textTransform: 'none',
                            bgcolor: '#2563eb',
                            '&:hover' : { bgcolor: '#1d4ed8' }
                        }}
                        >
                            vote
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default AnecdoteList
