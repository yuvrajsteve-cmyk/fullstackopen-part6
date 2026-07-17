import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect} from "react";


const Dispatcher = {
    _callbacks: [],

    register(callback) {
        this._callbacks.push(callback)
    },

    dispatch(action) {
        this._callbacks.forEach(callback => callback(action));
    }
};

    let _count = 0;
    const _listeners = [];

const CounterStore = {
    getCount() {
        return _count;
    },

    addListener(callback) {
        _listeners.push(callback);
    },

    emitChange() {
        _listeners.forEach(callback => callback());
    }
};

Dispatcher.register((action) => {
    switch (action.type) {
        case 'INCREMENT':
            _count = _count + 1;
            CounterStore.emitChange();
            break;
        case 'DECREMENT':
            _count = _count - 1;
            CounterStore.emitChange();
            break;
           default:
            break;     
    }
});

export default function CounterApp () {
    const [count, setCount] = useState(CounterStore.getCount());

    useEffect(() => {
        CounterStore.addListener(() => {
            setCount(CounterStore.getCount());
        });
    }, []);

    return(
        <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    p: 3,
    my: 2,
    bgcolor: 'primary.main',
    color: 'primary.contrastText',
    borderRadius: 2,
    boxShadow: 2,
    gap: 3
  }}>
            <Typography variant="h1">{count}</Typography>
            <Button variant="contained" color="secondary" onClick={() => Dispatcher.dispatch({ type: 'INCREMENT'})}>Plus</Button>
            <Button variant="contained" color="secondary" onClick={() => Dispatcher.dispatch({ type: 'DECREMENT'})}>Minus</Button>
        </Box>
    )
}