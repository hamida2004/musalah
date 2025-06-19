import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { colors, styles } from '../assets/style'
import { useRouter } from 'expo-router'

// for the groups that the user is member of
const Group = ({ id, name, teacher, timing, description, image }) => {
    const router = useRouter()

    return (
        <Pressable style={{ ...styles.container, elevation: 2, borderRadius: 8, width: '100%', marginVertical: 16 }}
            onPress={() => {
                router.push({ pathname: '/(tabs)/(Groups)/group', params: { id } })

            }}
        >
            <Image source={{ uri: image }} style={{ width: '100%', height: 100 }} />
            <Text style={{ ...styles.header, color: colors.primary }}
            >{name}</Text>
            <View style={{
                display: 'flex',
            }}>
                <Text
                style={{fontWeight:'bold' , textAlign:'left'}}
                >{teacher}</Text>
                <Text
                    style={{ color: "#555", textAlign:'left'}}
                >{timing.day} | {timing.hour}</Text>
            </View>
            <Text>{description}</Text>
  

        </Pressable>
    )
}

export default Group