import React from 'react'
import { View, Text, Button } from 'react-native'
import User from './User'
import MyPicker from './MyPicker'
import states from '../assets/states.js'

const Home = ({ navigation }) => {
    console.log(states)
    return (
        <View>
            <User/>
            <MyPicker states={states}/>
            <Button title="Press me"></Button>
        </View>
    )
}

export default Home
