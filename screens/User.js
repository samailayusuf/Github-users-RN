import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'


//import image from '../assets/splash.png'

const User = ({image, name, profileURL, navigation}) => {
    //const {image, name, profile} = route.params
    return (
        
            <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Profile',{
                image,
                name,
                profileURL
            })}>
            <View style={styles.imageContainer}>
                <Image source={{uri:image}} style={styles.image}/>
            </View>

            <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:100,
        borderWidth:1,
        borderColor: "#00072d",
        padding: 20,
        alignItems:'center',
        marginHorizontal:5,
        marginTop:5,
        backgroundColor:'#0a2472'
    },
    imageContainer:{
        height:50,
        width:50,
        borderColor:'#FFF',
        borderWidth:1,
        borderRadius:10,
        marginRight:20
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:10
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'#FFF'
    }

})


export default User


