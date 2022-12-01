import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Auth extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    opendrawer() {
        this.props.navigation.navigate('DrawerContent');
    }

   render(){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => this.opendrawer()}>
            <Text>this is auth page</Text>
            </TouchableOpacity>
        </View>
    )
   }

}

export default Auth;