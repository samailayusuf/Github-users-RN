import React from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import MyPicker from './MyPicker'

const Form = ({ navigation, states  }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.text} placeholder="Enter programming language here"/>
            <MyPicker style={styles.picker} states={states}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:40,
        borderColor: '#ec6537',
        borderWidth:1,
        alignItems:'center',
        marginHorizontal:5
    },
    text:{
        fontSize:16,
        width:150,
        height:'80%',
        flex:2,
        padding:3
    },
    picker:{
        flex:1,
        margin:1
    },
    
})

export default Form
