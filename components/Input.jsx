import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { colors, styles } from '../assets/style'

const Input = ({placeholder,handleChange,pwd  , value}) => {
  return (
    <View style={{...styles.input,position:'relative'}}>
    <Text  style={{position:'absolute', top:'-10',color:colors.primary,fontSize:12}}>
      {placeholder}
    </Text>
    <TextInput
    secureTextEntry={pwd}
    value={value}
    placeholder={placeholder} onChangeText={handleChange} />
    </View>
  )
}

export default Input