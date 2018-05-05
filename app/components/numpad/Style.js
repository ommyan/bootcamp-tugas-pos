'use strict';

import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
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

    inputContainer: {
        flex: 8,
        backgroundColor: '#4DD0E1'
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
});

export default Style;