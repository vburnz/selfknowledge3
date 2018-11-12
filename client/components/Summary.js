//put the summary of all cycle things here
//list all cycle things 
//for full moon --> render the tally 
//for the new moon --> render the remove or pass on buttons 

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import {getIntention, getMourn, getAppreciate} from '../store'
import reflection from '../sketches/reflection'
import FullMoon from './FullMoon'
import NewMoon from './NewMoon'

class Summary extends Component { 
    constructor(props){ 
        super(props); 
        this.state = { 
            moonType: this.props.location.state.moonType
            //need to also get if it is new full or normal 
            // moonType: props.location.state
        }
    }
    componentDidMount(){ 
        console.log('props.location.state', this.props.location.state)
        
        this.setState({cycleId: this.props.cycleNum})
        this.props.getIntention(this.props.cycleNum); 
        this.props.getAppreciate(this.props.cycleNum); 
        this.props.getMourn(this.props.cycleNum); 

    }

    render(){ 
        const sum = this.props.intention.length + this.props.appreciate.length + this.props.mourn.length; 

        return (
            <div>
                {(this.state.moonType === "Full" ? <FullMoon sum={sum}/> : <div></div>)}
                {(this.state.moonType === "New" ? <NewMoon /> : <div></div>)} 

            <div>
                <h4>Summary</h4>
                <div>Intention: {this.props.intention.length} / 5</div>
                <div>Appreciate: {this.props.appreciate.length} / 5</div>
                <div>Mourn: {this.props.mourn.length} / 5</div>
                <div>Sum: {sum}/15</div>
            </div>

            

            
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    intention: state.intention.intention, 
    mourn: state.mourn.mourn, 
    appreciate: state.appreciate.appreciate, 
    cycleNum: state.cycle.cycleNum
})

const mapDispatchToProps = dispatch => ({ 
    getIntention: (cycleNum) => dispatch(getIntention(cycleNum)), 
    getMourn: (cycleNum) => dispatch(getMourn(cycleNum)), 
    getAppreciate: (cycleNum) => dispatch(getAppreciate(cycleNum)), 
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Summary)); 