import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_INTENTION = 'GOT_INTENTION'
const ADDED_INTENTION = 'ADDED_INTENTION'

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
const addeddIntention = intention => ({type: ADDED_INTENTION, intention})

/**
 * THUNK CREATORS
 */
export const getIntention = (cycleNum) => async dispatch => { 
    try { 
        console.log('cycle num', cycleNum); 
        const res = await axios.get(`/api/intention/${cycleNum}`) 
        dispatch(gotIntention(res.data || initialState.intention))
    } 
    catch (error) { 
        console.error(error); 
    }
}

export const addIntention = (intention) => async dispatch => { 
    try {
        const res = await axios.post('/api/intention', intention)
        console.log('res.data', res.data); 
        dispatch(addeddIntention(res.data))
    } catch (error) {
        console.error(error)   
    }
}

/**
 * REDUCER
 */

export default function (state = initialState, action) { 
    switch (action.type) { 
        case GOT_INTENTION: 
            return {...state, intention: action.intention}
        case ADDED_INTENTION: 
            return {...state, intention: [...state.intention, action.intention]}
        default: 
            return state; 
    }
}