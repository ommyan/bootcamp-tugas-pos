import React, { Component } from 'react';
import {  Icon,Container, Content, List, ListItem, Left, Right,Body,Thumbnail, Avatar} from 'native-base'
import { TouchableOpacity,Image,StyleSheet,Button, View, Text, ImageBackground } from 'react-native'
import {connect} from 'react-redux'

import {allProfiles} from '../action'
import {allHl} from '../action'
import HlRow from '../screens/HlRow'
const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

class Profiles extends Component {
    state = {  }
    componentWillMount(){
        this.props.dispatch(allProfiles())
        this.props.dispatch(allHl())
      }
    render() {
        console.log(this.props.profilsReducer)
        
        return (
            <Container>
                <Content>
                <View style={[{flex: 1}, styles.profileImage]}>
                <ImageBackground
                resizeMode={'stretch'} // or cover
                style={{flex: 1,justifyContent='center', alignItems='center'}} // must be passed from the parent, the number may vary depending upon your screen size
                source={require('../../../assets/background.jpeg')}
                >

                    
                <View style={styles.profileImage}>
                <Image source={require('../../../assets/download.jpeg')}
                style={{alignSelf: 'center', width: 120, height: 120, borderRadius: 120/2}} />
                </View>

                        <View style={styles.profile} >
                        {this.props.profilsReducer.profils.map((prof,i)=>(
                        <View key={i} style={styles.textDisplay}>
                        <Text style={{fontWeight: 'bold',fontSize: 15}}>{prof.name}</Text>
                        <Text style={{fontWeight: 'bold',fontSize: 11}}>{prof.title} at</Text>
                        <Text style={{fontWeight: 'bold',fontSize: 11}}>{prof.company}</Text>
                        <Text style={{fontWeight: 'bold',fontSize: 10}}>{prof.university} - {prof.city}</Text>
                        
                        </View> 
                        )
                        )}
                            
                        <View style={styles.buttonstyle}>
                            <Button 
                            color="#ffff"
                            fontColor='black'
                            title="Message"
                            >
                            </Button>
                            <Button 
                            color="#304FFE"
                            title="Connect"
                            >
                            </Button>
                        </View> 

                        {this.props.profilsReducer.profils.map((proff,i)=>(
                            <View key={i} style={styles.textDisplay}>
                            <Text style={{fontWeight: 'bold',fontSize: 10, alignItems:'center', justifyContent: 'center'}}>{proff.description} at</Text>

                            </View>
                        ))}

                        </View>

                        <View style={styles.hl} >
                        <List>
                        {this.props.profilsReducer.hl.map((h,i)=>(
                         <HlRow item={h} />  
                        ))}    
                        </List>
                        </View>

                </ImageBackground>
                </View>

                    
                  
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
   profile: {
        backgroundColor: '#ffff',
        padding:15,
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
   },
   hl: {
    backgroundColor: '#ffff',
    padding:15,
    flex: 1,
    marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    textDisplay: {
        alignItems:'center',
        justifyContent: 'center'
        },
    buttonstyle: {
            alignItems:'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginRight: 5,
            padding: 5,
            marginTop:5
    },    
    backgroundImage:{
        width:380,
        height:50,
      },
    profileImage:
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        paddingTop: 10,
       
      }  
   
});


const mapStateToProps = (state)=>({
    profilsReducer: state.profilsReducer
  })
  
  export default connect(mapStateToProps)(Profiles)