import React, { Component } from 'react';
import {  Icon,Container, Content, List, ListItem, Left, Right,Body,Thumbnail, Avatar} from 'native-base'
import { TouchableOpacity,Image,StyleSheet,Button, View, Text, ImageBackground } from 'react-native'

export default class HlRow extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.hl} >
                <ListItem  
                key={i}
                >
                <Left>
                <Icon name="Add" />
                />
                
                </Left>
                <Body>
                <Text style={{fontWeight: 'bold',fontSize: 11}}>{props.item.hl}at</Text>
                </Body>
                </ListItem>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hl: {
        backgroundColor: '#ffff',
        padding:15,
        flex: 1,
        marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10
        },

})