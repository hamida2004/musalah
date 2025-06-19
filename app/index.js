import { View, Text, Pressable, ActivityIndicator, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Redirect, useRouter } from 'expo-router'
import { colors, styles } from '../assets/style'
import UserRoleContext from '../hooks/userContext'

const index = () => {
  const [firstLogin, setFirstLogin] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [laoding, setLoading] = useState(false)
  const router = useRouter()

  if (laoding) {
    return (
      <View
        style={styles.container}
      >
        <ActivityIndicator color={colors.primary} size='large' />
      </View>
    )
  }

  return (

    <View
      style={styles.container}
    >
      {
        // firstLogin ? <View
        // style={styles.container}
        // >
        //   <Text 
        //     style={styles.normal}
        //   >Musalah
        //     هو رفيقك الأمثل في رحلتك لتعلُّم القرآن، يوجّهك ويدعمك في كل خطوة على الطريق.</Text>
        //   <Btn title={'start'} handlePress={()=>{
        //   setLoading(true)
        //   router.replace('/(auth)/Login')
        //   setLoading(false)
        // }} />

        // </View> : 
        authenticated ? <Redirect
          href={'/(tabs)/(Home)'}
        /> : <Redirect
          href={'/(auth)/Login'}
        />}
      <StatusBar barStyle={'light-content'} />
    </View>
  )
}

export default index