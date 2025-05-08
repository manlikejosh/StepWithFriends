import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { Session } from '@supabase/supabase-js';
import { useRouter } from "expo-router";
import { supabase } from "./utils/supabase";

export default function ProfileSetup({ session }: { session: Session }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [avatarUrl, setAvatarUrl] = useState("")
    const [loading, setLoading] = useState(false);
    const router = useRouter();
 


    async function handleProfile() {
        if(!firstName || !lastName || !userName) {
            Alert.alert("Error", "Please fill in all fields ");
            return;
        }

        updateProfile( firstName, lastName, userName, avatarUrl)
    } 

    async function updateProfile(firstName:string, lastName:string, userName:string, avatar_url:string ) {
        try{
            setLoading(true)
            if(!session?.user) {
                throw new Error('No user on the session!')
            }

            const userInfo = {
                id:session?.user.id, first_name:firstName, last_name:lastName, user_name:userName, avatar_url:avatar_url, email:session?.user.email
            }
            const { error } = await supabase.from('profiles').insert(userInfo);
        
      if (error) {
        throw error
      }

        }catch (error) {
            if (error instanceof Error) {
              Alert.alert(error.message)
            }
          } finally {
            setLoading(false)
          }
        }
    return ( 
        <View> 
            <Text>Setup your profile</Text>
            <TextInput placeholder="first name" value={firstName} onChangeText={setFirstName}/>
            <TextInput placeholder="last name" value={lastName} onChangeText={setLastName}/>
            <TextInput placeholder="user name" value={userName} onChangeText={setUserName}/>
            <TextInput placeholder="avatar url" value={userName} onChangeText={setAvatarUrl}/>

            <TouchableOpacity onPress={handleProfile}>
                <Text>Save information</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
})