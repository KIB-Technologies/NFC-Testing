import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Auth')}>
              <Text> Hello this is splash page</Text>
              </TouchableOpacity>
            </View>
        )
    }



}
export default Splash;