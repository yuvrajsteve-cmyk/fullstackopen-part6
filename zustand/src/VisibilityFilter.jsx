import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useNoteActions } from './useNoteStore'

const VisibilityFilter = () => {

    const { setFilter } = useNoteActions()

    return (
        <RadioGroup onChange={(event) => setFilter(event.target.value)}
            defaultValue='all'>
           <FormControlLabel control={<Radio 
            name='filter'
            value='all'
            />} label='all' />

            <FormControlLabel control={ <Radio 
            name='filter'
            value='important'
            />} label='important' />

           <FormControlLabel control={<Radio 
            name='filter'
            value='nonimportant'
            />} label='not important' />
        </RadioGroup>
    )
}

export default VisibilityFilter