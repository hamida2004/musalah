import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { colors, styles } from '../assets/style'

const Btn = ({handlePress,title}) => {
  return (
    <Pressable 
    onPress={handlePress}
    style={{...styles.btn,backgroundColor:colors.white,borderColor:colors.primary, borderWidth:2}}
    >
        <Text
        style={{...styles.normal,color:colors.primary}}
        >{title}</Text>
    </Pressable>
  )
}

export default Btn