import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class PureComponent extends Component {
    static propTypes = {
            
    }

    render() {
        return (
            <div>
           Pure Component   {this.props.name}
            </div>
        )
    }
}

export default PureComponent
