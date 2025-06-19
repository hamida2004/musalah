import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { colors, styles } from '../../assets/style'
import Logo from '../../components/Logo'
import Input from '../../components/Input'
import Btn from '../../components/Btn'
import { Link, useRouter } from 'expo-router'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin=()=>{
    //login logic
    router.replace('/(tabs)/(Home)')

  }
  console.log(email, password)

  return (
    <View
      style
      ={styles.container}
    >
      <Text
        style={styles.header}
      >Musalah</Text>
      <Logo />
      <Input placeholder={"Email"} handleChange={setEmail} />
      <Input placeholder={"Password"} handleChange={setPassword} />
      <Text
        style={{ marginBottom: 40 }}
      >you don't have an account? <Link
        style={{ color: colors.primary, fontWeight: 600, fontSize: 16, marginLeft: 5 }}
        href={'/Signup'}>Sign Up</Link></Text>
      <Btn title={"Login"} 
      handlePress={handleLogin}
      />
    </View>
  )
}

export default Login