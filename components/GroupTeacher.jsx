import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { colors, styles } from '../assets/style'
import { useRouter } from 'expo-router'

// for the groups that the user is member of
const GroupTeacher = ({ id, image}) => {
    const router = useRouter()

    return (
        <View
        style={{ height: "100%", elevation: 2 }}
        >
            <Pressable style={{ height: "100%" ,width: '100%'}}
            onPress={() => {
                router.push({ pathname: '/(tabs)/(Groups)/group', params: { id } })

            }}
        >
            <Image source={{ uri: image }} style={{ width: '100%', height: "100%", overflow: "hidden", resizeMode: 'cover' }} />

        </Pressable>
        </View>
    )
}

export default GroupTeacher