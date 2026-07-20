import { create} from 'zustand'

const initialNotes = [
    {
        id: 1,
        content: 'Zustand is less complex than Redux',
        important: true,
    },
    {
        id: 2,
        content: 'React app benifits from react hooks',
        important:  false
    },
    {
        id: 3,
        content: 'Remember to sleep well',
        important: true
    }
]

const useNoteStore = create(Set => ({
   notes: [],
   filter: 'all',
   actions: {
    add: note => Set(
        state => ({ notes: state.notes.concat(note) })
    ),
    toggleImportance : id => Set(
        state => ({
            notes: state.notes.map(note => 
                note.id === id ? { ...note, important : !note.important} : note
            )
        })
    ),
    setFilter: value => Set(() => ({ filter: value })),
    initialize: notes => Set(() => ({ notes }))
   }
}))

export const useNotes = () => useNoteStore(state => state.notes)
export const useFilter = () => useNoteStore(state => state.filter)
export const useNoteActions = () => useNoteStore(state => state.actions)