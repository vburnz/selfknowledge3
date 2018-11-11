import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_MOURN = 'GOT_MOURN'

/**
 * INITIAL STATE
 */

const initialState = {
    mourn: []
}
/**
 * ACTION CREATORS
 */
const gotMourn = mourn =>({type: GOT_MOURN, mourn})

/**
 * THUNK CREATORS
 */
export const getMourn = () => async dispatch => { 
    try { 
        const res = await axios.get('/api/mourn')
        console.log('res.data', res); 
        dispatch(gotMourn(res.data || initialState.mourn))
    } 
    catch (err) { 
        console.error(err); 
    }
}

/**
 * REDUCER
 */

export default function (state = initialState, action) { 
    switch (action.type) { 
        case GOT_MOURN: 
            return {...state, mourn: action.mourn}
        default: 
            return state; 
    }
}