'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry,StyleSheet
} from 'react-native';

import InputButton from './InputButton';
import {numberThousand} from '../Util/Index'

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, '00','000'],
    ['20.000','50.000', '100.000'],
    ['C', 'CE']
];
let inputValue
let inputString=''

export default class Numpad extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            previousInputValue: 0,
            inputValue: 0,
            inputString: '',
            selectedSymbol: null
        };

        this.state = this.initialState;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Numpad {this.props.subtotal}</Text>
                <View style={styles.displayContainer}>
                    <Text style={styles.displayText}>{numberThousand(this.state.inputValue)}</Text>
                </View>
                <View >
                <Text>Render Numpad button</Text>
                    {this._renderInputButtons()}
                </View>
            </View>
        );
    }

    _renderInputButtons() {
        let views = inputButtons.map((row, idx) => {
            let inputRow = row.map((buttonVal, columnIdx) => {
                return <InputButton
                            value={buttonVal}
                            highlight={this.state.selectedSymbol === buttonVal}
                            onPress={this._onInputButtonPressed.bind(this, buttonVal)}
                            key={'butt-' + columnIdx} />;
            });

            return <View style={styles.inputRow} key={'row-' + idx}>{inputRow}</View>;
        });

        return views;
    }

    _onInputButtonPressed(input) {
        
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput((input));
            default:
                return this._handleStringInput(input);
        }
    }

    _handleNumberInput(num) {
        let inputValue = (this.state.inputValue.toString()) + num.toString();
        console.log('iv',inputValue)
        this.setState({
            inputValue: inputValue
        });
    }

    _handleStringInput(str) {
        
        switch (str) {
            case '20.000':
            inputValue = str;
            console.log('20',str)
            this.setState({
                inputValue: str
            }
            );
            console.log('after20',inputValue)
            
            case '50.000':
            inputValue = (this.state.inputValue);
            this.setState({
                inputValue: inputValue
            });
            case '100.000':
            inputValue = (this.state.inputValue);
            this.setState({
                inputValue: inputValue
            });
            case '00':
            inputValue = (this.state.inputValue) + str;
            console.log('strbefore',inputValue,str)
            this.setState({
                inputValue: inputValue
            });
            console.log('strAfter',this.state.inputValue,str)
            case '000':
            inputValue = (this.state.inputValue) + str;
            this.setState({
                inputValue: inputValue
            });
            case 'CE':
                this.setState(this.initialState);
                    break;

            case 'C':
                this.setState({inputValue: 0});
                break;

        }
    }

}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 8,
        backgroundColor: '#4DD0E1'
    },
    rootContainer: {
        flex: 1,
        borderWidth: 4,
        height: 100,
    },
    displayContainer: {
        flex: 2,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center'
    },
    displayText: {
        color: 'black',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: '#E1F5FE'
    },

    inputButtonHighlighted: {
        backgroundColor: '#E1F5FE'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffff'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
})    