import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
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
            tagInput: ''
        }
        this.handleSubmit= this.handleSubmit.bind(this); 
    }
    componentDidMount(){ 
        this.props.getAppreciate(); 

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
                <P5Wrapper sketch={sketch} appreciates={this.props.appreciate.length}/>
                <div>{this.props.appreciate.length} / 5 appreciations this cycle</div>
                {(this.props.appreciate.length >= 5) ? (<div>APPRECIATE FILLED</div>) : (null) }
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Target</th>
                            <th>Notes</th>
                            <th>Tags</th>
                        </tr>
                        {this.props.appreciate.map(appreciate => { 
                        return (
                            <tr key={appreciate.id}>
                                <td>{appreciate.date}</td>
                                <td>{appreciate.target}</td>
                                <td>{appreciate.notes}</td>
                                <td>{appreciate.tags.join(', ')}</td>
                            </tr>
                        )})}
                    </tbody>
                </table>
                <form>
                    {/* Date<input type="text" value={this.state.date} onChange={event => this.setState({ date: event.target.value })}/> */}
                    Target<input type="text" value={this.state.target} onChange={event => this.setState({ target: event.target.value })}/>
                    Notes<input type="text" value={this.state.notes} onChange={event => this.setState({ notes: event.target.value })}/>
                    {/* Tags<input type="text" value={this.state.tagInput} onChange={event => this.setState({ tagInput: event.target.value })}/> */}
                    <button type="submit" onClick={this.handleSubmit}>Appreciate</button>
                </form>
            </div>
            )
            : 
            (<div></div>)

        )
    }
}

const mapStateToProps = state => ({ 
    appreciate: state.appreciate.appreciate
})

const mapDispatchToProps = dispatch => ({ 
    getAppreciate: () => dispatch(getAppreciate()),
    addAppreciate: (appreciate) => dispatch(addAppreciate(appreciate))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Appreciate)); 