import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getAppreciate} from '../store'

class Appreciate extends Component { 
    componentDidMount(){ 
        this.props.getAppreciate(); 

    }
    render(){ 
        return (
            this.props.appreciate ? 
            (
            <div>
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
    getAppreciate: () => dispatch(getAppreciate())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Appreciate)); 