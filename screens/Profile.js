import React from 'react'
import { View, Image, StyleSheet, Text, Alert, Share, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import * as Linking from 'expo-linking'


const Profile = ({navigation, route}) => {
    const {name, image, profileURL} = route.params

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Check out this awesome developer |' + profileURL,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    }


    return (
        <View style={styles.page}>
            <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri:image}} style={styles.image}/>
            </View>

            <Text style={styles.text}>@{name}</Text>
           </View>

            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.icon} onPress={ () => Linking.openURL(profileURL)}>
                <Ionicons name="link" size={32} color="black" />
                <Text >Visit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon} onPress={onShare}>
                <Entypo name="share" size={32} color="black" />
                <Text >Share Profile</Text>
                </TouchableOpacity>
            </View>

            <ActivityIndicator size="large" />
           
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
        height:'100%',
    },
    icon:{
        margin:20,
        justifyContent:'center',
        alignItems:'center'
    },
    iconContainer:{
        flexDirection:'row',
        alignSelf:'center',
        margin:40,
        justifyContent:'space-between',
        alignItems:'center'
    }
})

export default Profile
