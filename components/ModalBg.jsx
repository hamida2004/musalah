import { View, Text } from 'react-native'
import React from 'react'

const ModalBg = ({ children }) => {
  return (
    <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)' }} />
      <View style={{ backgroundColor: 'white', width: '80%', height: '50%', borderRadius: 10, justifyContent: 'center', position: 'relative', padding: 20 }}>
        {children}
      </View>
    </View>

  )
}

export default ModalBg