import { View, Text, Pressable, Alert, Image, ScrollView } from 'react-native';
import Input from '../../../components/Input';
import Btn from '../../../components/Btn';
import React, { useContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { groups, users } from '../../../assets/data';
import userRoleContext from '../../../hooks/userContext';
import { colors, styles } from '../../../assets/style';
import { Picker } from '@react-native-picker/picker';

const AddGroup = () => {
    const { roles, user } = useContext(userRoleContext);
    const [name, setName] = useState('');
    const [teacher, setTeacher] = useState('');
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [description, setDescription] = useState('');
    const [groupList, setGroupList] = useState(groups);
    const [imageUri, setImageUri] = useState(null);

    // تصفية المستخدمين الذين لديهم دور "Teacher"
    const teacherUsers = users.filter(user => user.roles.includes("Teacher"));

    // دالة اختيار الصورة
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    // دالة تأكيد الإضافة
    const confirmAddGroup = () => {
        if (!user) {
            Alert.alert("Error", "User not found!");
            return;
        }
        if (!name.trim() || !teacher.trim() || !day.trim() || !hour.trim() || !description.trim()) {
            Alert.alert("Error", "All fields are required!");
            return;
        }

        Alert.alert(
            "Confirm", // العنوان
            "Are you sure you want to add this group?", // النص
            [
                { text: "Cancel", style: "cancel" }, // زر الإلغاء
                { text: "Yes", onPress: addGroup }, // زر التأكيد
            ]
        );
    };

    // دالة إضافة المجموعة
    const addGroup = () => {
        const newGroup = {
            id: groupList.length + 1,
            name: name.trim(),
            teacher: teacher.trim(),
            timing: { day: day.trim(), hour: hour.trim() },
            description: description.trim(),
            image: imageUri,
        };

        setGroupList([newGroup, ...groupList]);
        setName('');
        setTeacher('');
        setDay('');
        setHour('');
        setDescription('');
        setImageUri(null);
        Alert.alert("Success", "Group added successfully!");
    };

    return (
        <ScrollView contentContainerStyle={{ gap: 20, ...styles.container }}
            showsVerticalScrollIndicator={false}
        >
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Add Group</Text>

            {roles.includes("Admin") && (
                <Pressable
                    onPress={pickImage}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 100,
                        height: 100,
                        borderColor: colors.primary,
                        borderWidth: 2,
                        borderRadius: 4,
                        overflow: 'hidden',
                    }}
                >
                    {imageUri ? (
                        <Image source={{ uri: imageUri }} style={{ width: '100%', height: '100%' }} />
                    ) : (
                        <Text style={{ fontSize: 32, color: '#888' }}>+</Text>
                    )}
                </Pressable>
            )}

            <Input value={name} handleChange={setName} placeholder="Group Name" />

            <Picker selectedValue={teacher} onValueChange={(itemValue) => setTeacher(itemValue)}>
                <Picker.Item label="Select a Teacher" value="" />
                {teacherUsers.map((teacher) => (
                    <Picker.Item key={teacher.id} label={teacher.name} value={teacher.name} />
                ))}
            </Picker>

            <Input value={day} handleChange={setDay} placeholder="Day" />
            <Input value={hour} handleChange={setHour} placeholder="Hour" />
            <Input value={description} handleChange={setDescription} placeholder="Description" multiline />

            <Btn title="Add Group" handlePress={confirmAddGroup} />
        </ScrollView>
    );
};

export default AddGroup;