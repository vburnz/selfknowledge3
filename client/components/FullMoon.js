import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import {getMourn, addMourn} from '../store'
import manifestation from '../sketches/manifestation'


export default class FullMoon extends Component { 
    constructor(props){ 
        super(props); 
        this.state = { }
    }
    componentDidMount(){ 

    }
    
    render(){ 
        return (
          <div>
            <div>It's a full-a moon-a</div>
            <P5Wrapper sketch={manifestation} total={this.props.sum}/>
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