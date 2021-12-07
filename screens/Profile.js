import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 


const Profile = ({navigation, route}) => {
    const {name, image, profileURL} = route.params
    return (
        <View style={styles.page}>
            <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri:image}} style={styles.image}/>
            </View>

            <Text style={styles.text}>@{name}</Text>
           </View>

           <View>
           <Ionicons name="link" size={32} color="black" />
           <Text>Visit Profile</Text>
           </View>

           <View>
           <Entypo name="share" size={24} color="black" />
           <Text>Share Profile</Text>
           </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        height:300,
        width:'100%',
        
    },
    image:{
        width:'100%',
        height:'100%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        margin:10,
        padding:10
    },
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
        borderWidth:1,
        borderColor:'#ddd',
        marginHorizontal:10,
        borderRadius:10,
        backgroundColor:'#fff'
    },
    page:{
        backgroundColor:'#ddd',
        height:'100%'
    }
})

export default Profile
