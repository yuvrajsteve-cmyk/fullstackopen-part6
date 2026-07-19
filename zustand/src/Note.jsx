import { Button, ListItem, Typography } from '@mui/material'
import { useNoteActions } from './useNoteStore'

const Note = ({ note }) => {
    const { toggleImportance } = useNoteActions()

    return (
        <ListItem sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Typography sx={{
                fontWeight: note.important ? 700 : 500,
                color: note.important ? '#2563eb' : '#334155'
            }}>
                {note.content}
            </Typography>
            <Button onClick={() => toggleImportance(note.id)}>
                {note.important ? 'make not important' : 'make important'}
            </Button>
        </ListItem>
    )
}

export default Note
