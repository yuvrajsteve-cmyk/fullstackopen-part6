import { create} from 'zustand'

const useNoteStore = create(Set => ({
   notes: [],
   actions: {
    add: note => Set(
        state => ({ notes: state.notes.concat(note) })
    )
   }
}))

export const useNotes = () => useNoteStore(state => state.notes)
export const useNoteActions = () => useNoteStore(state => state.actions)