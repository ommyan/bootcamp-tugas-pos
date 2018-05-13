import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { RkButton, RkText, RkChoice, RkChoiceGroup } from 'react-native-ui-kitten';

export default class LkCheckbox extends Component {

  handleSelect = (index) => {
    const { input, items } = this.props;
    const { value } = items[index];
    let sameValue = false;
    if (input.value.length > 0) {
      input.value.map(item => {
        if (item == value) {
          sameValue = true;
        }
      })
    }
    if (sameValue) {
      const newValue = input.value.filter(item => item != value);
      this.props.input.onChange(newValue);
    } else {
      this.props.input.onChange([...this.props.input.value, value]);
    }
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

    const values = input.value.length > 0 ? input.value.map(item => item) : []

    return (
      <View style={styles.container}>
        <RkText style={styles.labelStyle} rkType='small'>{label}</RkText>
        <RkChoiceGroup style={styles.radioGroup} onChange={(index) => this.handleSelect(index)} >
          {items.map((item, index) => {
            let selected = false;
            values.map(value => {
              if (value == item.value) {
                selected = true;
              }
            })
            return (
              <TouchableOpacity key={index} choiceTrigger>
                <View style={styles.button}>
                  <RkChoice style={styles.radio} selected={selected} />
                  <RkText rkType='bold'>{item.label}</RkText>
                </View>
              </TouchableOpacity>
            )
          })}
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