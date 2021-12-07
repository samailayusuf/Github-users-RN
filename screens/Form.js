import React , {useState} from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native'
import MyPicker from './MyPicker'

const Form = ({ navigation, states, onChangeText, onValueChange,onPress, language }) => {
    const [text, setText] = useState("")
    return (

        <View>
            <View style={styles.container}>
                <TextInput style={styles.text} 
                        placeholder="Enter programming language here"
                        value={language}
                        onChangeText={(text) => {
                            onChangeText(text)
                            setText(text)
                        }}/>
                <MyPicker style={styles.picker} states={states} onValueChange={onValueChange}/>
           </View>
           <Button title="Submit" onPress={onPress} style={{marginHorizontal:5}}>Submit</Button>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:40,
        borderColor: '#ddd',
        borderWidth:1,
        alignItems:'center',
        marginHorizontal:5
    },
    text:{
        fontSize:16,
        width:150,
        height:'80%',
        flex:1,
        padding:3
    },
    picker:{
        flex:1,
        margin:1
    },
    
})

export default Form
