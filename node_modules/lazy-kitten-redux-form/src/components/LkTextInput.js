import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { RkTheme, RkTextInput, RkText } from 'react-native-ui-kitten';

export default class LkTextInput extends Component {

  render() {
    const {
      label,
      style,
      input,
      inline,
      inputStyle,
      labelStyle,
      meta: {
        error,
        warning,
        touched
      },
    } = this.props;

    return (
      <View style={styles.container}>
        <RkTextInput
          rkType={inline ? null : "topLabel"}
          {...input}
          {...this.props}
          value={input.value}
          onChangeText={input.onChange}
          labelStyle={[styles.labelStyle, labelStyle]}
          style={[styles.containerStyle, style]}
          inputStyle={[styles.inputStyle, inputStyle]}
        />
        <RkText rkType='danger small'>{touched && error ? error : ""}</RkText>
      </View>
    )
  }

  static defaultProps = {
    inline : false
  }

  static propTypes = {
    inputStyle : PropTypes.object,
    labelStyle : PropTypes.object,
    style : PropTypes.object,
    inline : PropTypes.bool,
    label : PropTypes.string,
    placeholder : PropTypes.string
  }
}

const styles = StyleSheet.create({
  container: {
    height: 75
  },
  labelStyle: {

  },
  inputStyle: {
    color: 'black',
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    marginLeft: 0
  },
  containerStyle: {
    height: 45,
    marginBottom: 2
  }
})