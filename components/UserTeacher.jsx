import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const UserTeacher = ({ id, image }) => {
    const router = useRouter()

    return (
        <View
            style={{ height: "100%", elevation: 2, width: '100%' }}
        >
            <Pressable style={{ height: "100%", width: '100%' }}
                onPress={() => {
                    router.push({ pathname: '/(tabs)/(Account)/user', params: { id } })

                }}
            >
                <Image source={{ uri: image }} style={{ width: '100%', height: "100%", overflow: "hidden", resizeMode: 'cover' }} />

            </Pressable>
        </View>
    )
}

export default UserTeacher