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
export const getAppreciate = (startDate) => async dispatch => { 
    console.log('startDate', startDate); 
    try { 
        const res = await axios.get(`/api/feeling/appreciate/cycle/${startDate}`)
        dispatch(gotAppreciate(res.data || initialState.appreciate))
    } 
    catch (err) { 
        console.error(err); 
    }
}

export const addAppreciate = (appreciate) => async dispatch => { 
    try {
        console.log('data', appreciate)
        const res = await axios.post('/api/feeling/appreciate', appreciate)
        dispatch(addedAppreciate(res.data))
    } catch (error) {  
        console.error(error); 
    }
}

export const removeAppreciate = (appreciateId) => async dispatch => { 
    try {
        await axios.delete('/api/appreciate', appreciateId)
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