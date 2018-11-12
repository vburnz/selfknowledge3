import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import {getMourn, addMourn} from '../store'
import sketch from '../sketches/mourn'


class Mourn extends Component { 
    constructor(){ 
        super(); 
        this.state = { 
            // date: '', 
            target: '', 
            notes: '', 
            tags: [], 
            tagInput: '', 
            mournsThisCycle: 0, 
        }
        this.handleSubmit= this.handleSubmit.bind(this); 
    }
    componentDidMount(){ 
        this.props.getMourn(); 
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
        this.props.addMourn(this.state); 
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
                <P5Wrapper sketch={sketch} mourns={this.props.mourn.length}/>
                <div>{this.props.mourn.length} / 5 mournings this cycle</div>
                {(this.props.mourn.length >= 5) ? (<div>MOURN FILLED</div>) : (null) }
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Target</th>
                            <th>Notes</th>
                            <th>Tags</th>
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
                <form>
                    {/* Date<input type="text" value={this.state.date} onChange={event => this.setState({ date: event.target.value })}/> */}
                    Target<input type="text" value={this.state.target} onChange={event => this.setState({ target: event.target.value })}/>
                    Notes<input type="text" value={this.state.notes} onChange={event => this.setState({ notes: event.target.value })}/>
                    {/* Tags<input type="text" value={this.state.tagInput} onChange={event => this.setState({ tagInput: event.target.value })}/> */}
                    <button type="submit" onClick={this.handleSubmit}>Mourn</button>
                </form>
            </div>
            )
            : 
            (<div></div>)

        )
    }
}

const mapStateToProps = state => ({ 
    mourn: state.mourn.mourn
})

const mapDispatchToProps = dispatch => ({ 
    getMourn: () => dispatch(getMourn()), 
    addMourn: (mourn) => dispatch(addMourn(mourn))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Mourn)); 