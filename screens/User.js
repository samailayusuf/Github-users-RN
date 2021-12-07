import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native'
import image from '../assets/splash.png'

const User = () => {
    //const {image, name, profile} = route.params
    return (
        <View>
            <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image}/>
            </View>

            <Text style={styles.text}>Name of user</Text>
            </TouchableOpacity>
        </View>
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
        justifyContent:'space-between',
        marginHorizontal:5,
        marginTop:5,
        backgroundColor:'#0a2472'
    },
    imageContainer:{
        height:50,
        width:50,
        borderColor:'#FFF',
        borderWidth:1,
        borderRadius:10
    },
    image:{
        width:'100%',
        height:'100%',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'#FFF'
    }

})


export default User


