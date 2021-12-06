import React, {useState} from 'react'
import { View, Text, Picker, StyleSheet} from 'react-native'

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
      paddingTop: 10,
      alignItems: "center",
      backgroundColor:'#abc'
    },
    picker:{
        height: 50, 
        width: 150,
        borderWidth:2,
      borderColor:'black',
    }
  });

export default MyPicker
