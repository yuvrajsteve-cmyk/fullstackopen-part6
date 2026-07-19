import { List } from '@mui/material'
import { useFilter, useNotes } from './useNoteStore'
import Note from './Note'

const NoteList = () => {
  const notes = useNotes()
  const filter = useFilter()

  const filteredNotes = notes.filter(note => {
    if (filter === 'all') {
      return true
    } else if (filter === 'important') {
      return note.important 
    } else if (filter === 'nonimportant') {
      return !note.important
    }
  })

  return (
    <>
      {notes.length > 0 && (
        <List disablePadding sx={{ 
          border: '1px solid #f1f5f9', 
          borderRadius: 3, 
          overflow: 'hidden',
          bgcolor: '#ffffff'
        }}>
          {filteredNotes.map((note) => (
            <Note note={note} key={note.id} />
          ))}
        </List>
      )}
    </>
  )
}

export default NoteList
