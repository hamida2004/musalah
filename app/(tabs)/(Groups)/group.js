import { View, Text, Image, ScrollView, Pressable, Linking } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { groups, teachers } from '../../../assets/data'
import { colors, styles } from '../../../assets/style'
import { Picker } from "@react-native-picker/picker";
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'
import UserRoleContext from '../../../hooks/userContext';


const group = () => {
    const { roles } = useContext(UserRoleContext)
    const { id } = useLocalSearchParams()
    const [teacher, setTeacher] = React.useState({})
    const [showTeacherModal, setShowTeacherModal] = React.useState(false)
    const [group, setGroup] = React.useState({
        id: 1,
        name: "",
        teacher: "",
        timing: { day: "", hour: "" },
        description: "",
        image: ""
    })

    const handleCall = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`);
    }


    useEffect(() => {
        const selectedGroup = groups.find(group => group.id === Number(id)); // Convert selectedValue to number
        if (selectedGroup) {
            setGroup(selectedGroup);
        }


    }, []);
    const handleTeacherPress = () => {
        const teacher = teachers.find(teacher => teacher.name === group.teacher)
        if (teacher) {

            setTeacher(teacher)
        }
        setShowTeacherModal(true)

    }
    return (
        <>
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
            {(roles.includes("Teacher") || roles.includes('Admin')) && (
                <ScrollView>
                    <Text>group members</Text>
                </ScrollView>
            )

            }
        </>
    )
}

export default group