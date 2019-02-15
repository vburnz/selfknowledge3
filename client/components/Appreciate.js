import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import P5Wrapper from 'react-p5-wrapper'
import P5Wrapper from './P5Wrapper'
import {getAppreciate, addAppreciate} from '../store'
import sketch from '../sketches/appreciate'

class Appreciate extends Component { 
    constructor(){ 
        super(); 
        this.state = { 
            // date: '', 
            target: '', 
            notes: '', 
            tags: [], 
            tagInput: '', 
            cycleId: null
        }
        this.handleSubmit= this.handleSubmit.bind(this); 
    }
    componentDidMount(){ 
        this.setState({cycleId: this.props.cycleNum})
        this.props.getAppreciate(this.props.cycleNum); 
        console.log('cycleNum', this.props.cycleNum); 
        

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
        this.props.addAppreciate(this.state); 
        this.setState({
            // date: '', 
            target: '', 
            notes: '', 
            tags: []
        })
    }
    render(){ 
        return (
            this.props.appreciate ? 
            (
            <div className ="appreciate container">
                {(this.props.appreciate.length >= 5) ? (<div className="filled-notice">APPRECIATE FILLED</div>) : (null) }
                <P5Wrapper className="sketch" sketch={sketch} appreciates={this.props.appreciate.length}/>
                <div className="counter-text">{this.props.appreciate.length} / 5 appreciations this cycle</div>
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
                    <button type="submit" onClick={this.handleSubmit}>Add Appreciation</button>
                </form>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Target</th>
                            <th>Notes</th>
                            {/* <th>Tags</th> */}
                        </tr>
                        {this.props.appreciate.map(appreciate => { 
                        return (
                            <tr key={appreciate.id}>
                                <td>{appreciate.date}</td>
                                <td>{appreciate.target}</td>
                                <td>{appreciate.notes}</td>
                                {/* <td>{appreciate.tags.join(', ')}</td> */}
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
    appreciate: state.appreciate.appreciate, 
    cycleNum: state.cycle.cycleNum
})

const mapDispatchToProps = dispatch => ({ 
    getAppreciate: (cycleNum) => dispatch(getAppreciate(cycleNum)),
    addAppreciate: (appreciate) => dispatch(addAppreciate(appreciate))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Appreciate)); 