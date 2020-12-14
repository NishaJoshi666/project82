import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert} from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'

export default class RecieverDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            userId:firebase.auth().currentUser.email,
            RecieverId:this.props.navigation.getParam('Details')['user_id'],
            requestId:this.props.navigation.getParam('Details')['request_id'],
            BookName:this.props.navigation.getParam('Details')['book_name'],
            reason:this.props.navigation.getParam('Details')['reason_to_request'],
            recieverName:"",
            recieverContact:'',
            recieverRequest:'',
            recieverAddress:'',
        }
    }
    render(){
        return(
            <View>

            </View>
        )
    }

}