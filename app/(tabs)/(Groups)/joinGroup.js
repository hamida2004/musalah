import { View, Text, Image, ScrollView, Pressable, Linking } from 'react-native'
import React, { useEffect } from 'react'
import { groups, teachers } from '../../../assets/data'
import { colors, styles } from '../../../assets/style'
import { Picker } from "@react-native-picker/picker";
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'
import index from '.';


const joinGroup = () => {
    const [teacher, setTeacher] = React.useState({})
    const [showTeacherModal, setShowTeacherModal] = React.useState(false)
    const router = useRouter();
    const [selectedValue, setSelectedValue] = React.useState(1);
    const [group, setGroup] = React.useState(groups[0])

    const handleCall = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`);
    }
    useEffect(() => {
        const selectedGroup = groups.find(group => group.id === Number(selectedValue)); // Convert selectedValue to number
        if (selectedGroup) {
            setGroup(selectedGroup);
        }
    }, [selectedValue]);


    const handleTeacherPress = () => {
        const teacher = teachers.find(teacher => teacher.name === group.teacher)
        if (teacher) {

            setTeacher(teacher)
        }
        setShowTeacherModal(true)

    }
    return (
        <>

            <View>
                <Picker selectedValue={selectedValue} onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                    {groups.map((group, index) => {
                        return <Picker.Item key={index} label={group.name} value={group.id} />
                    })}
                </Picker>
            </View>
            <ScrollView
                contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, gap: 20, position: 'relative' }}
                showsVerticalScrollIndicator={false}
            >

                <View
                    style={{ width: 200, height: 200, borderRadius: 100, overflow: 'hidden', elevation: 2, marginBottom: 20 }}
                >
                    <Image source={{ uri: "https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }} style={{ width: "100%", height: "100%" }}

                    />
                </View>
                <Text
                    style={{ ...styles.header, width: '100%', textAlign: 'center' }}
                >{group.name}</Text>
                <View
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}
                >
                    <Text
                        style={{ fontWeight: 'bold', textAlign: 'left' }}
                    >Timing</Text>
                    <Text>

                        {group.timing.day} {group.timing.hour}</Text>
                </View>
                <Pressable
                    onPress={handleTeacherPress}

                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}
                >

                    <Text
                        style={{ fontWeight: 'bold' }}
                    >
                        Teacher

                    </Text>
                    <Text
                        style={{ color: '#555' }}
                    >
                        {group.teacher}
                    </Text>
                </Pressable>
                <Text
                    style={{ width: '100%', textAlign: 'left', fontWeight: 'bold' }}
                >
                    Description

                </Text>
                <Text
                    style={{ color: '#555', width: '100%', textAlign: 'left' }}
                >
                    {group.description}
                </Text>
                <Pressable
                    style={styles.btn}>
                    <Text
                        style={{ color: colors.white }}
                    >Join Group</Text>
                </Pressable>

            </ScrollView>

            {showTeacherModal && (
                <View style={{
                    flex: 1,
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)',
                    flex: 1, justifyContent: 'center', alignItems: 'center',
                }}>
                    <View
                        style={{ padding: 20, backgroundColor: colors.white, borderRadius: 8, elevation: 2, width: '80%', alignItems: 'center', gap: 20 }}>
                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                            }}
                        >
                            <Image
                                source={{ uri: teacher.image }}
                                style={{ width: 50, height: 50, borderRadius: 30, overflow: 'hidden', elevation: 2, marginBottom: 20 }}
                            />
                            <Text
                                style={{ ...styles.header, width: '100%', textAlign: 'center' }}
                            >{teacher.name}</Text>
                        </View>
                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                            }}
                        >

                            <Text
                                style={{ width: '100%', textAlign: 'left' }}
                            >{teacher.phoneNumber}</Text>
                            <Pressable
                                onPress={() => { handleCall(teacher.phoneNumber) }}
                            >
                                <Ionicons name="call-outline" color={"green"} size={20} />

                            </Pressable>
                        </View>

                        <Text
                            style={{ color: '#555', width: '100%', textAlign: 'left' }}
                        >
                            {teacher.description}
                        </Text>
                        <Pressable
                            onPress={() => {
                                setShowTeacherModal(false)
                            }}
                            style={styles.btn}
                        >
                            <Text
                                style={{ color: colors.white }}
                            >Close</Text>
                        </Pressable>
                    </View>
                </View>
            )}
        </>
    )
}

export default joinGroup