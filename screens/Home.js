import React, {useEffect, useState } from 'react'
import { View, Text, Button, ScrollView, Alert, Keyboard, ActivityIndicator } from 'react-native'
import User from './User'
import MyPicker from './MyPicker'
import states from '../assets/states.js'
import Form from './Form'
import axios from 'axios'

const Home = ({ navigation }) => {
    
    const [users, setUsers] = useState([])
    const [language, setLanguage] = useState("")
    const [location, setLocation] = useState("")

    const onChange = (text) =>{
        setLanguage(text)
        console.log(text)
    }

    const changeOption = (option) =>{
        setLocation(option)
        Alert.alert(option)
    }

    const check = (e) => {
        if (language ==="") return
        e.preventDefault()
        Keyboard.dismiss()
        const url = `https://api.github.com/search/users?q=location:${location}+language:${language}&page=1&per_page=12`
        setUsers([])
        axios.get(url)
        .then(data => {
            setLocation("")
            setLanguage("")
            setUsers(data.data.items)
        })
        .catch(e=>console.log(e))
    }

    const url = "https://api.github.com/search/users?q=location:${location}+language:${language}&page=1&per_page=12"

    useEffect(() => {
        axios.get(url)
        .then(data=> {
            setUsers(data.data.items)
            //console.log(users)
            //Alert.alert(language+location)
        })
        .catch(e=>{
            console.log({Message:e})
        })

    }, [])

    //console.log(states)
    return (
        <View>
            {/* <Button title="Press me" onPress={()=>navigation.navigate("Profile")}></Button> */}
            <Form states= {states} 
                  onChangeText={onChange} 
                  onValueChange={changeOption} 
                  onPress={check}
                  language={language}/>

            <ScrollView>
            {users.map((element, key)=>(
            
            <User key={key} navigation={navigation} name={element.login} image={element.avatar_url} profileURL={element.html_url}/>

            ))}
            </ScrollView>

            <ActivityIndicator size="large" />

            
            
        </View>
    )
}

export default Home
