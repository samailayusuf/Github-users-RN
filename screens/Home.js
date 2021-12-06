import React from 'react'
import { View, Text, Button } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home page</Text>
            <Button
                title="Go to settings"
                onPress={() => navigation.navigate('Settings', 
                {image:'imgURL', name:'thename', profile:'profile_URL'})}
      />
        </View>
    )
}

export default Home
