import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import P5Wrapper from 'react-p5-wrapper'
import P5Wrapper from './P5Wrapper'
import {getFeeling, addFeeling} from '../store'
import sketch from '../sketches/mourn'

const type = 'mourn'; 

class Mourn extends Component { 
    constructor(){ 
        super(); 
        this.state = { 
            // date: '', 
            target: '', 
            notes: '', 
            tags: [], 
            tagInput: '', 
        }
        this.handleSubmit= this.handleSubmit.bind(this); 
    }
    componentDidMount(){ 
        this.props.getFeeling(new Date() - (28 - this.props.newMoon), 'mourn'); 
        // this.setState({cycleId: this.props.cycleNum})
        // this.props.getMourn(this.props.cycleNum); 
        // console.log('mourn props', this.props.mourn)
        // this.setState({mournsThisCycle: this.props.mourn.length}); 

        

    }
    handleSubmit(event){ 
        event.preventDefault(); 
        // console.log(this.state.tagInput)
        // let tags = []
        // tags = this.state.tagInput.split(', '); 
        // console.log('tagssss', tags); 
        // this.setState({tags: tags})
        // console.log(this.state); 
        // this.props.addMourn({...this.state, tags}); 
        this.props.addFeeling(this.state, 'mourn'); 
        this.setState({
            // date: '', 
            target: '', 
            notes: '', 
            tags: []
        })
    }
    render(){ 
        return (
            this.props.mourn ? 
            (
            <div className="mourn container">
                {(this.props.mourn.length >= 5) ? (<div className="filled-notice">MOURN FILLED</div>) : (null) }
                <P5Wrapper sketch={sketch} className="sketch" mourns={this.props.mourn.length}/>
                <div className="counter-text">{this.props.mourn.length} / 5 mournings this cycle</div>
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
                    <button type="submit" onClick={this.handleSubmit}>Add Mourning</button>
                </form>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Target</th>
                            <th>Notes</th>
                            {/* <th>Tags</th> */}
                        </tr>
                        {this.props.mourn.map(mourn => { 
                        return (
                            <tr key={mourn.id}>
                                <td>{mourn.date}</td>
                                <td>{mourn.target}</td>
                                <td>{mourn.notes}</td>
                                {/* <td>{mourn.tags.join(', ')}</td> */}
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
    feeling: state.appreciate[type], 
    newMoon: state.cycle.newMoon
})

const mapDispatchToProps = dispatch => ({ 
    getFeeling: (startDate, feelingType) => dispatch(getFeeling(startDate, feelingType)),
    addFeeling: (feeling, feelingType) => dispatch(addFeeling(feeling, feelingType))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Mourn)); 