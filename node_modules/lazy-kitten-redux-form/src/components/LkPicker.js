import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Modal, Dimensions, Image, ScrollView } from 'react-native';
import { RkTheme, RkButton, RkText } from 'react-native-ui-kitten';

const { width} = Dimensions.get('window');

export default class LkPicker extends Component {

  state = {
    modalVisible: false
  }

  handleModalVisible = () => {
    this.setState({modalVisible: !this.state.modalVisible})
  }

  handleSelect = (value) => {
    this.props.input.onChange(value);
    this.handleModalVisible();
  }

  render() {

    const {
      label,
      style,
      input,
      inline,
      inputStyle,
      labelStyle,
      items,
      meta: {
        error,
        warning,
        touched
      },
    } = this.props;

    const value = items.filter(item => item.value == input.value)[0];

    return (
      <View style={styles.container}>
        <RkText style={styles.labelStyle} rkType='small'>{input.value ? label : ''}</RkText>
        <RkButton onPress={this.handleModalVisible} style={styles.button} rkType="stretch">
          <RkText style={styles.valueStyle}>{value ? value.label : label}</RkText>
          <View style={styles.caret}></View>
        </RkButton>
        <RkText rkType='danger small'>{touched && error ? error : ""}</RkText>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View style={styles.containerModal}>
            <TouchableOpacity onPress={this.handleModalVisible} activeOpacity={1} style={styles.containerVisible}/>
            <View style={styles.modal}>
              <RkButton onPress={this.handleModalVisible} style={styles.buttonClose}>
                <Image style={styles.iconClose} source={require('../img/icon-close.png')} />
              </RkButton>
              <ScrollView>
                {items.map((item, index) => (
                  <RkButton key={index} onPress={()=>this.handleSelect(item.value)} style={[styles.item, item.value == input.value ? {backgroundColor: 'rgba(0, 0, 0, 0.1)'} : null ]} rkType="stretch">
                    <RkText rkType='large'>{item.label}</RkText>
                  </RkButton>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
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
    placeholder : PropTypes.string,
    items: PropTypes.array.isRequired
  }
}

const styles = StyleSheet.create({
  container: {
    height: 75
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerVisible: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    height: 30,
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 0,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 0.5
  },
  valueStyle: {
    marginLeft: -12
  },
  labelStyle: {
    color: '#777777',
    marginBottom: 2
  },
  caret: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 6,
    borderRightWidth: 4,
    borderBottomWidth: 0,
    borderLeftWidth: 4,
    borderTopColor: '#999999',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent'
  },
  modal: {
    backgroundColor: '#ffffff',
    maxHeight: 400,
    width: 270,
    borderRadius: 10,
    paddingBottom: 20
  },
  item: {
    height: 50,
    backgroundColor: 'transparent',
    padding: 10,
    paddingLeft: 20,
    justifyContent: 'flex-start',
    borderRadius: 0
  },
  buttonClose: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    height: 30,
    width: 30
  },
  iconClose: {
    height: 20,
    width: 20,
  }
})