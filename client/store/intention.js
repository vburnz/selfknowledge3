import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_INTENTION = 'GOT_INTENTION'

/**
 * INITIAL STATE
 */

const initialState = {
    intention: []
}
/**
 * ACTION CREATORS
 */
const gotIntention = intention =>({type: GOT_INTENTION, intention})

/**
 * THUNK CREATORS
 */
export const getIntention = () => async dispatch => { 
    try { 
        const res = await axios.get('/api/intention')
        console.log('res.data', res); 
        dispatch(gotIntention(res.data || initialState.intention))
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
        case GOT_INTENTION: 
            return {...state, intention: action.intention}
        default: 
            return state; 
    }
}