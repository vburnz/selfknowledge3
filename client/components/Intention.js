import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import P5Wrapper from 'react-p5-wrapper'
import P5Wrapper from './P5Wrapper'
import {getIntention, addIntention} from '../store'
import sketch from '../sketches/intention'

class Intention extends Component { 
    constructor(){ 
        super(); 
        this.state = { 
            // date: '', 
            target: '', 
            notes: '', 
            tags: [], 
            tagInput: '', 
            cycleId: null, 
            pass: true
        }
        this.handleSubmit= this.handleSubmit.bind(this); 
    }
    componentDidMount(){ 
        console.log('this.props', this.props)
        this.setState({cycleId: this.props.cycleNum})
        this.props.getIntention(this.props.cycleNum); 

    }
    handleSubmit(event){ 
        event.preventDefault(); 
        if (this.state.target!=='' && this.state.notes !==''){
            this.props.addIntention(this.state); 
            this.setState({
                // date: '', 
                target: '', 
                notes: '', 
                tags: []
            })
        }
        this.setState({pass: !this.state.pass})
        //have something that passes new props to the sketch 
        
    }
    render(){ 
        return (
            this.props.intention ? 
            (
            <div className="intention container">
                {(this.props.intention.length >= 5) ? (<div className="filled-notice">INTENTION FILLED</div>) : (null) }
                <P5Wrapper pass={this.state.pass} sketch={sketch} className="sketch" intentions={this.props.intention.length}/>
                <div className="counter-text">{this.props.intention.length} / 5 intentions this cycle</div>
                <br /> 
                <form className="input-container counter-text">
                    {/* Date<input type="text" value={this.state.date} onChange={event => this.setState({ date: event.target.value })}/> */}
                    Target
                    <br/>
                    <input type="text" value={this.state.target} onChange={event => this.setState({ target: event.target.value })}/>
                    <br />
                    Notes
                    <br />
                    <input type="text" value={this.state.notes} onChange={event => this.setState({ notes: event.target.value })}/>
                    <br />
                    {/* Tags<input type="text" value={this.state.tagInput} onChange={event => this.setState({ tagInput: event.target.value })}/> */}
                    <button type="submit" onClick={this.handleSubmit}>Add Intention</button>
                </form>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Target</th>
                            <th>Notes</th>
                            {/* <th>Tags</th> */}
                        </tr>
                        {this.props.intention.map(intention => { 
                        return (
                            <tr key={intention.id}>
                                <td>{intention.date}</td>
                                <td>{intention.target}</td>
                                <td>{intention.notes}</td>
                                {/* <td>{intention.tags.join(', ')}</td> */}
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
            )
            : 
            (<div></div>)

        )
    }
}

const mapStateToProps = state => ({ 
    intention: state.intention.intention, 
    cycleNum: state.cycle.cycleNum
})

const mapDispatchToProps = dispatch => ({ 
    getIntention: (cycleNum) => dispatch(getIntention(cycleNum)), 
    addIntention: (intention) => dispatch(addIntention(intention)), 
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Intention)); 