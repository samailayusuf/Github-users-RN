import React, {useEffect, useState } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import User from './User'
import MyPicker from './MyPicker'
import states from '../assets/states.js'
import Form from './Form'
import axios from 'axios'

const Home = ({ navigation }) => {
    
    const [users, setUsers] = useState([])
    const url = "https://api.github.com/search/users?q=location:${location}+language:${language}&page=1&per_page=12"

    useEffect(() => {
        axios.get(url)
        .then(data=> {
            setUsers(data.data.items)
            console.log(users)
        })
        .catch(e=>{
            console.log({Message:e})
        })

    }, [])

    console.log(states)
    return (
        <View>
            {/* <Button title="Press me" onPress={()=>navigation.navigate("Profile")}></Button> */}
            <Form states= {states}/>

            <ScrollView>
            {users.map((element, key)=>(
            
            <User key={key} navigation={navigation} name={element.login} image={element.avatar_url} profileURL={element.html_url}/>

            ))}
            </ScrollView>

            
            
        </View>
    )
}

export default Home
