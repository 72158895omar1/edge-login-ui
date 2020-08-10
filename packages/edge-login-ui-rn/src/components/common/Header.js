// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import s from '../../common/locales/strings.js'
import T from '../../components/common/FormattedText.js'
import * as Colors from '../../constants/Colors.js'
import { Button, HeaderBackButton } from '../common'

type Props = {
  customLabel?: string,
  goBack(): void,
  showBackButton: boolean,
  showSkipButton?: boolean,
  skipScreen?: () => void,
  style: Object,
  subTitle: string,
  title: string,
  useCancel?: boolean
}

export class Header extends Component<Props> {
  render() {
    const Style = this.props.style
    return (
      <LinearGradient
        style={[Style.container, { paddingTop: 0 }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={Colors.GRADIENT}
      >
        <View style={Style.left}>{this.renderBack(Style)}</View>
        {this.renderText(Style)}
        <View style={Style.right}>{this.renderSkip(Style)}</View>
      </LinearGradient>
    )
  }

  renderBack(style: Object) {
    if (!this.props.showBackButton) {
      return
    }
    let label = s.strings.back
    if (this.props.useCancel) {
      label = s.strings.cancel_caps
    }
    if (this.props.customLabel) {
      label = this.props.customLabel
    }
    return (
      <HeaderBackButton
        onPress={this.onBack}
        styles={style.headerBackButtonStyle}
        label={label}
      />
    )
  }

  renderText(style: Object) {
    return (
      <View style={style.center}>
        {this.props.subTitle !== '' && (
          <T style={style.subHeadText}>{this.props.subTitle}</T>
        )}
        <T style={style.headlineText}>{this.props.title}</T>
      </View>
    )
  }

  renderSkip(style: Object) {
    if (!this.props.showSkipButton) {
      return
    }
    return (
      <Button
        onPress={this.onSkip}
        downStyle={style.textButton.downStyle}
        downTextStyle={style.textButton.downTextStyle}
        upStyle={style.textButton.upStyle}
        upTextStyle={style.textButton.upTextStyle}
        label={s.strings.skip}
      />
    )
  }

  onSkip = () => {
    if (this.props.skipScreen != null) this.props.skipScreen()
  }

  onBack = () => {
    this.props.goBack()
  }
}