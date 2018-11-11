import axios from 'axios'
//const astroAPI = require('./sdk'); 

/**
 * ACTION TYPES
 */
const GOT_ASTRODATA = 'GOT_ASTRODATA'

/**
 * INITIAL STATE
 */

const initialState = {
    astro: {}
}
/**
 * ACTION CREATORS
 */
const gotAstrodata = astro =>({type: GOT_ASTRODATA, astro})

/**
 * THUNK CREATORS
 */
export const getAstrodata = () => async dispatch => { 
    try { 
        // const astro = await axios.post('/https://json.astrologyapi.com/v1/western_horoscope', )
        // //const astro = await astroAPI.call('western_horoscope', 5, 6, 1992, 4, 48, 33.4152, 111.8315, -7)
        // console.log('astro', astro); 
        // dispatch(gotAstrodata(astro || initialState.astro)); 
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
        case GOT_ASTRODATA: 
            return {...state, astro: action.astro}
        default: 
            return state; 
    }
}