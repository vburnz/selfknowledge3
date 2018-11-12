import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_APPRECIATE = 'GOT_APPRECIATE'
const ADDED_APPRECIATE = 'ADDED_APPRECIATE'

/**
 * INITIAL STATE
 */

const initialState = {
    appreciate: []
}
/**
 * ACTION CREATORS
 */
const gotAppreciate = appreciate =>({type: GOT_APPRECIATE, appreciate})
const addedAppreciate = appreciate => ({type: ADDED_APPRECIATE, appreciate})

/**
 * THUNK CREATORS
 */
export const getAppreciate = (cycleNum) => async dispatch => { 
    try { 
        const res = await axios.get(`/api/appreciate/${cycleNum}`)
        dispatch(gotAppreciate(res.data || initialState.appreciate))
    } 
    catch (err) { 
        console.error(err); 
    }
}

export const addAppreciate = (appreciate) => async dispatch => { 
    try {
        console.log('data', appreciate)
        const res = await axios.post('/api/appreciate', appreciate)
        dispatch(addedAppreciate(res.data))
    } catch (error) {  
        console.error(error); 
    }
}

/**
 * REDUCER
 */

export default function (state = initialState, action) { 
    switch (action.type) { 
        case GOT_APPRECIATE: 
            return {...state, appreciate: action.appreciate}
        case ADDED_APPRECIATE: 
            return {...state, appreciate: [...state.appreciate, action.appreciate]}
        default: 
            return state; 
    }
}