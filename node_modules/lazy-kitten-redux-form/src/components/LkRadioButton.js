import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { RkButton, RkText, RkChoice, RkChoiceGroup } from 'react-native-ui-kitten';

export default class LkRadioButton extends Component {

  handleSelect = (index) => {
    const { value } = this.props.items[index]
    this.props.input.onChange(value);
  }

  render() {
    const {
      label,
      style,
      input,
      labelStyle,
      items,
      meta: {
        error,
        warning,
        touched
      },
    } = this.props;

    const indexValue = items.findIndex(item => item.value == input.value)

    return (
      <View style={styles.container}>
        <RkText style={styles.labelStyle} rkType='small'>{label}</RkText>
        <RkChoiceGroup radio style={styles.radioGroup} selectedIndex={indexValue} onChange={(index) => this.handleSelect(index)} >
          {items.map((item, index) => (
            <TouchableOpacity key={index} choiceTrigger>
              <View style={styles.button}>
                <RkChoice rkType='radio' style={styles.radio} />
                <RkText rkType='bold'>{item.label}</RkText>
              </View>
            </TouchableOpacity>
          ))}
        </RkChoiceGroup>
        <RkText rkType='danger small'>{touched && error ? error : ""}</RkText> */}
      </View>
    )
  }

  static defaultProps = {
    inline : false
  }

  static propTypes = {
    labelStyle : PropTypes.object,
    style : PropTypes.object,
    label : PropTypes.string,
    items : PropTypes.array.isRequired
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: 75
  },
  labelStyle: {
    color: '#777777',
    marginBottom: 5
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    height: 40,
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 0,
  },
  radio: {
    alignSelf: 'center',
    marginRight: 12,
  }
})