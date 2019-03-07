import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import P5Wrapper from 'react-p5-wrapper'
import P5Wrapper from './P5Wrapper'
import {getMourn, addMourn} from '../store'
import reflection from '../sketches/reflection'

const NewMoon = () => {
        document.body.style = 'background: black;'; 
        return (
            <div>
                <h3>Today is a New Moon</h3>
                <h4>New Moons are excellent times to reflect on what serves you and what does not...</h4>
                <h5>As darkness descends, we too must see our energies coming to a resting place, clearing out the old to welcom in the new</h5>
                <P5Wrapper sketch={reflection}/> 
            </div>
        )
        
}

export default NewMoon; 

// const mapStateToProps = state => ({ 
//     mourn: state.mourn.mourn, 
//     cycleNum: state.cycle.cycleNum
// })

// const mapDispatchToProps = dispatch => ({ 
//     getMourn: (cycleNum) => dispatch(getMourn(cycleNum)), 
//     addMourn: (mourn) => dispatch(addMourn(mourn))
// })

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewMoon)); 