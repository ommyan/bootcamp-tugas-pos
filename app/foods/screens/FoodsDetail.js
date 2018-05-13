import React, { Component } from 'react'
import { View, Text } from 'react-native'


export default class FoodsDetail extends Component {
    state = {  }
    render() {
       // console.log('desc',this.props.navigation.state.params.desc)
        const { params } = this.props.navigation.state
        return (
            <View>
                <Text>
                   {params.desc.id} {params.desc.title}
                </Text>
                
            </View>
        );
    }
}