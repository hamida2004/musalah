import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { colors, styles } from '../../../assets/style';
import Input from '../../../components/Input';
import { Ionicons } from "@expo/vector-icons";
import Btn from '../../../components/Btn';
import BtnInv from '../../../components/BtnInv';
import QRCode from "react-native-qrcode-svg";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AchievementCircle from '../../../components/AcheivementCircle';
import UserRoleContext from '../../../hooks/userContext';

const ProfileScreen = () => {
  const { user, updateUser } = useContext(UserRoleContext);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [fullName, setFullName] = useState(user.fullName);
  const [speciality, setSpeciality] = useState(user.speciality || '');
  const [profileImage, setProfileImage] = useState(null);

  console.log('user', user);

  const pickImage = async () => {
    console.log('pressed')
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.mediaTypes.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    updateUser({ fullName, email, speciality, password, Image: profileImage })
    alert('updates saved !')
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: 20 }}>
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={profileImage ? { uri: profileImage } : require('../../../assets/avatar.jpg')}
              style={{ width: 100, height: 100, borderRadius: 50, margin: 20 }}
            />
          </TouchableOpacity>
          <QRCode value='1' size={100} style={{ margin: 20 }} />
        </View>

        <View style={{ width: '100%', marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Input placeholder="Full Name" handleChange={setFullName} value={fullName} />
            <Ionicons name="pencil" size={24} color='grey' />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Input placeholder="Speciality" handleChange={setSpeciality} value={speciality} />
            <Ionicons name="pencil" size={24} color='grey' />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Input placeholder="Email" handleChange={setEmail} value={email} />
            <Ionicons name="pencil" size={24} color='grey' />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Input placeholder="Password" handleChange={setPassword} pwd={show} value={password} />
            <Ionicons name="pencil" size={24} color='grey' style={{ marginHorizontal: 2 }} />
            <Ionicons name={show ? 'eye' : 'eye-off'} size={24} color='grey' onPress={() => setShow(!show)} />
          </View>
        </View>

        <Btn title="My Progress" handlePress={() => setShowModal(true)} />
        <BtnInv title="Save Changes" handlePress={handleSave} />
      </View>

      {showModal && (
        <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)' }} />
          <View style={{ backgroundColor: 'white', width: '80%', height: '50%', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="close" size={28} color='red' style={{ position: 'absolute', top: 10, right: 10 }} onPress={() => setShowModal(false)} />
            <AchievementCircle color={colors.primary} percentage={80} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
              <Text>I have attended</Text>
              <Text style={{ ...styles.normal, marginLeft: 5, color: colors.primary }}>8 sessions</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
