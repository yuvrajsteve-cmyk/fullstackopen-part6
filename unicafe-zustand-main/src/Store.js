import { create } from 'zustand'

const useUnicafeStore = create(set => ({
    good: 0,
    neutral: 0,
    bad: 0,

    goodIncrement: () => set(state => ({ good: state.good + 1 })),
    neutralIncrement: () => set(state => ({ neutral: state.neutral + 1 })),
    badIncrement: () => set(state => ({ bad: state.bad + 1 }))
}))

export default useUnicafeStore
