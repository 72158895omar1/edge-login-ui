// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { WORKFLOW_PIN } from '../../common/constants'
import { type Dispatch, type RootState } from '../../types/ReduxTypes'
import { ChangeAccountPinScreen } from '../components/screens/existingAccout/ChangeAccountPinScreenComponent'

type OwnProps = {
  styles: Object,
  showHeader: boolean
}
type DispatchProps = {
  setWorkflow(): void
}
type Props = OwnProps & DispatchProps

class ChangePinAppComponent extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.props.setWorkflow()
  }

  render() {
    const { ScreenStyle } = this.props.styles
    return (
      <View accessible style={ScreenStyle}>
        <ChangeAccountPinScreen
          styles={this.props.styles}
          showHeader={this.props.showHeader}
        />
      </View>
    )
  }
}

export const ChangePinApp = connect(
  (state: RootState) => ({}),
  (dispatch: Dispatch): DispatchProps => ({
    setWorkflow() {
      dispatch({ type: 'WORKFLOW_START', data: WORKFLOW_PIN })
    }
  })
)(ChangePinAppComponent)
