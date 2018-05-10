import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';

import Style from './Style';
import InputButton from './InputButton';
import { numberThousand} from '../Util/Index'
import {connect} from 'react-redux'
import {CreateTransaction, CreatePayment}  from '../../orders/transactionAction';


// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, '00', '000'],
    ['C'],
    [''],
    ['Cash', 'Credit Card','Coupon'],
    
];
let n=0
class Numpad extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            previousInputValue: 0,
            inputValue: props.subtotal,
            selectedSymbol: null
        };

        this.state = this.initialState;
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{numberThousand(this.state.inputValue)}</Text>
                </View>
                <View style={Style.inputContainer}>
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

            return <View style={Style.inputRow} key={'row-' + idx}>{inputRow}</View>;
        });

        return views;
    }

    _onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input);
            default:
                return this._handleStringInput(input);
        }
    }

    _handleNumberInput(num) {
        let inputValue = (this.state.inputValue * 10) + num;

        this.setState({
            inputValue: inputValue
        });
    }
    _updateTrans(value,str){
        payItem={bayar: value, cara: str}

        payment= this.props.transactionReducer.payments
        payment.push(payItem)
        this.props.dispatch(CreatePayment(payment))

        transItem= this.props.transactionReducer.transactions
        // transItem[0].cash= value
         transItem[0].paymentmethod = str
        this.props.dispatch(CreateTransaction(transItem))
        this.setState({inputValue: 0});   
    }
    _handleStringInput(str) {
        switch (str) {
            case 'C':
                this.setState({inputValue: 0});
                break;   
            case '00':
                this.setState({inputValue: this.state.inputValue + str});   
                break;    
            case '000':
                this.setState({inputValue: this.state.inputValue + str});  
                break;      
            case "Cash":
            this._updateTrans(this.state.inputValue,str)
            break;   
            case "Credit Card":
            this._updateTrans(this.state.inputValue,str)
            break;   
            case "Coupon":
            this._updateTrans(this.state.inputValue,str)   
            break;        
            default:
                break;    
        }
    }

}

const mapStateToProps = (state)=>({
    transactionReducer: state.transactionReducer,
    orderReducer: state.orderReducer
  })
  
export default connect(mapStateToProps)(Numpad)  
