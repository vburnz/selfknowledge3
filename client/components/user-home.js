import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


import MoonDay from './MoonDay'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div className ="welcome container">
      <h3>w e l c o m e </h3>
      
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
