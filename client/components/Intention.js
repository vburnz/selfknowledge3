import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
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
            tagInput: ''
        }
        this.handleSubmit= this.handleSubmit.bind(this); 
    }
    componentDidMount(){ 
        this.props.getIntention(); 

    }
    handleSubmit(event){ 
        event.preventDefault(); 
        this.props.addIntention(this.state); 
        this.setState({
            // date: '', 
            target: '', 
            notes: '', 
            tags: []
        })
    }
    render(){ 
        return (
            this.props.intention ? 
            (
            <div className="intention container">
                <P5Wrapper sketch={sketch} className="sketch" intentions={this.props.intention.length}/>
                <div>{this.props.intention.length} / 5 intentions this cycle</div>
                {(this.props.intention.length >= 5) ? (<div>INTENTION FILLED</div>) : (null) }
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Target</th>
                            <th>Notes</th>
                            <th>Tags</th>
                        </tr>
                        {this.props.intention.map(intention => { 
                        return (
                            <tr key={intention.id}>
                                <td>{intention.date}</td>
                                <td>{intention.target}</td>
                                <td>{intention.notes}</td>
                                <td>{intention.tags.join(', ')}</td>
                            </tr>
                        )})}
                    </tbody>
                </table>
                <form>
                    {/* Date<input type="text" value={this.state.date} onChange={event => this.setState({ date: event.target.value })}/> */}
                    Target<input type="text" value={this.state.target} onChange={event => this.setState({ target: event.target.value })}/>
                    Notes<input type="text" value={this.state.notes} onChange={event => this.setState({ notes: event.target.value })}/>
                    {/* Tags<input type="text" value={this.state.tagInput} onChange={event => this.setState({ tagInput: event.target.value })}/> */}
                    <button type="submit" onClick={this.handleSubmit}>Intention</button>
                </form>
            </div>
            )
            : 
            (<div></div>)

        )
    }
}

const mapStateToProps = state => ({ 
    intention: state.intention.intention
})

const mapDispatchToProps = dispatch => ({ 
    getIntention: () => dispatch(getIntention()), 
    addIntention: (intention) => dispatch(addIntention(intention))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Intention)); 