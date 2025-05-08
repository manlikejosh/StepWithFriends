import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";


export default function ProfileSetup() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")

    

    return ( 
        <View> 
            <Text>Setup your profile</Text>
            <TextInput placeholder="first name" value={firstName} onChangeText={setFirstName}/>
            <TextInput placeholder="last name" value={lastName} onChangeText={setLastName}/>
            <TextInput placeholder="user name" value={userName} onChangeText={setUserName}/>
            <TouchableOpacity>
                <Text>Save information</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})