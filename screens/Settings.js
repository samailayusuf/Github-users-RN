import React from 'react'
import { View, Text, Button } from 'react-native'

const Settings = ({ route, navigation }) => {
    const {image, name, profile} = route.params
    return (
        <View>
            <Text>Settings</Text>
            <View>
                <Text>{image}</Text>
                <Text>{name}</Text>
                <Text>{profile}</Text>
            </View>
            <Button
                title="Go to Navigation"
                onPress={() => navigation.navigate('Notifications')}
      />
        </View>
    )
}

export default Settings
