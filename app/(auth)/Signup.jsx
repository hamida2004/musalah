import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { colors, styles } from '../../assets/style'
import Logo from '../../components/Logo'
import Input from '../../components/Input'
import Btn from '../../components/Btn'
import { Link, useRouter } from 'expo-router'

const Signup = () => {
 
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [speiality, setSpeiality] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const handleLogin=()=>{
    //login logic
    router.replace('/Login')

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
      <Input placeholder={"Full Name"} handleChange={setFullName} />
      <Input placeholder={"Speiality"} handleChange={setSpeiality} />
      <Input placeholder={"Email"} handleChange={setEmail} />
      <Input placeholder={"Password"} handleChange={setPassword} pwd={true}/>
      <Input placeholder={" confirm Password"} handleChange={setConfirmPassword} pwd={true}/>
      <Text
        style={{ marginBottom: 40 }}
      >you already have an account? <Link
        style={{ color: colors.primary, fontWeight: 600, fontSize: 16, marginLeft: 5 }}
        href={'/Signup'}>sign In</Link></Text>
      <Btn title={"sign Up"} 
      handlePress={handleLogin}
      />
    </View>
  )
}

export default Signup