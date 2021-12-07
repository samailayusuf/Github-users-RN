import React, {useState} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker'

const MyPicker = ({states}) => {
    
      
    const [selectedValue, setSelectedValue] = useState("");
        return (
            <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {
                    states.map((el, key)=>(
                        <Picker.Item label={el}  key={key} value={el} />
                    ))
                }
            </Picker>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
      padding: 0,
      alignItems: "center",
      borderRadius:10,
      borderWidth:0,
      borderColor:'#ec6537',
      width:100,
      color:'#ec6537'
    },
    picker:{
        height: 30, 
        width: 100,
        margin:1
        
    }
  });

export default MyPicker