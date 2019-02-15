import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import P5Wrapper from 'react-p5-wrapper'
import P5Wrapper from './P5Wrapper'
import {getMourn, addMourn} from '../store'
import reflection from '../sketches/reflection'


export default class NewMoon extends Component { 
    constructor(){ 
        super(); 
        this.state = { }
    }
    componentDidMount(){ 

    }
    
    render(){ 
        return (
            <div>
                <div>It's a new-a moon-a</div>
                <P5Wrapper sketch={reflection}/>
            </div>
        )
    }
}

// const mapStateToProps = state => ({ 
//     mourn: state.mourn.mourn, 
//     cycleNum: state.cycle.cycleNum
// })

// const mapDispatchToProps = dispatch => ({ 
//     getMourn: (cycleNum) => dispatch(getMourn(cycleNum)), 
//     addMourn: (mourn) => dispatch(addMourn(mourn))
// })

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewMoon)); 