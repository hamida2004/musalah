import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { colors, styles } from '../assets/style'

const Btn = ({handlePress,title}) => {
  return (
    <Pressable 
    onPress={handlePress}
    style={styles.btn}
    >
        <Text
        style={{...styles.normal,color:colors.white}}
        >{title}</Text>
    </Pressable>
  )
}

export default Btn