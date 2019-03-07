import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MoonDay from './MoonDay'
import Greeting from './Greeting'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div className ="welcome container">
      <Greeting />
      <MoonDay />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
