import React ,{Component} from 'react';
import {Text,View,TouchableOpacity,FlatList,StyleSheet} from 'react-native';
import {Card,Icon,ListItem} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../component/MyHeader';

export default class MyDonationsScreen extends Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            allBarters:[],

        }
        this.requestRef = null
    }
    getAllBarters=()=>{
        this.requestRef = db.collection('MyBarters').where('exchanger_id','==',this.state.userId).onSnapshot((snapShot)=>{
            var allBarters= snapShot.docs.map(document=>document.data())
            this.setState({
                allBarters:allBarters
            })
        })
    }
    keyExtractor = (item,index)=>index.toString()
    renderItem = ({item,i})=>{
        <ListItem
        key = {i}
        title = {item.item_name}
        subtitle = {'Status: '+item.exchange_status}
        leftElement = {<Icon name = 'item' type = 'font-awesome' color = 'orange'/>}
        titleStyle = {{color:'black',fontWeight:'bold'}}
        rightElement = {<TouchableOpacity style = {styles.button}>
            <Text style = {{color:'black'}}>send item</Text>
        </TouchableOpacity>}
        bottomDivider/>
    }
    componentDidMount(){
        this.getAllBarters()
    }
    componentWillUnmount(){
        this.requestRef()
    }
    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader navigation = {this.props.navigation} title = 'My Barters'/>
                <View style = {{flex:1}}>
                    {this.state.allBarters.length===0?
                    (<View style = {styles.subTitle}>
                        <Text style = {{fontSize:20}}>List of all Barters</Text></View>):
                        (<FlatList keyExtractor = {this.keyExtractor}
                        data = {this.state.allBarters}
                        renderItem = {this.renderItem}/>)}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       },
      elevation : 16
    },
    subTitle :{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    }
  })