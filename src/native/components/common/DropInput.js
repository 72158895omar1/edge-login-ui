import React, { Component } from 'react'
import { View } from 'react-native'

/* type Props = {
  style: any
} */

class DropInput extends Component {
  render () {
    const Style = this.props.style
    return <View style={Style.container} />
  }
}

export { DropInput }
