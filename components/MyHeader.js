import React ,{Component} from 'react';
import {Header,Icon} from 'react-native-elements';

const MyHeader = props=>{
    return(
        <Header
        leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}
        centerComponent = {{text:props.title , style:{color:'red',fontWeight:'bold',fontSize:20}}}
        backgroundColor = 'lightblue'/>
    )
}

export default MyHeader