import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { groups, users } from '../../../assets/data';

const User = () => {
    const handleRemove = (id) => {
        console.log('Remove User', id)
    }
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const user = users.find(user => user.id === Number(id))
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>MUSALAH</Text>

            <View style={styles.profileContainer}>
                <Image source={{ uri: "https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg"}} style={styles.profileImage} />
                <Pressable onPress={() => handleRemove(id)} >
                    <Text style={styles.removeText}>remove</Text>
                </Pressable>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.info}>{user.name}</Text>

                <Text style={styles.label}>Email:</Text>
                <Text style={[styles.info, styles.email]}>{user.email}</Text>

                <Text style={styles.label}>Speciality:</Text>
                <Text style={styles.info}>{user.speciality}</Text>
            </View>

            {user.roles.includes("Teacher") &&
                <View>
                    <Text style={styles.groupsTitle}>
                        Groups they teach:
                    </Text>
                    <ScrollView>

                        <View style={styles.groupsContainer}>
                            {groups?.map((group, index) => (
                                <View key={index} style={styles.groupItem}>
                                    <Image source={{ uri: group.image }} style={styles.groupImage} />
                                    <Pressable onPress={() => console.log('Remove Group')}>
                                        <Text style={styles.removeText}>remove</Text>
                                    </Pressable>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            }



            {user.roles.includes("Student") &&
                <View>
                    <Text style={styles.groupsTitle}>
                        Groups they teach:
                    </Text>
                    <ScrollView>

                        <View style={styles.groupsContainer}>
                            {groups?.map((group, index) => (
                                <View key={index} style={styles.groupItem}>
                                    <Image source={{ uri: group.image }} style={styles.groupImage} />
                                    <Pressable onPress={() => console.log('Remove Group')}>
                                        <Text style={styles.removeText}>remove</Text>
                                    </Pressable>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            }


        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FAF2',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
    },
    profileContainer: {
        alignItems: 'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    removeText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
    },
    infoContainer: {
        marginTop: 20,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    info: {
        fontSize: 16,
        marginBottom: 10,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    email: {
        color: 'gray',
    },
    groupsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    groupsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    groupItem: {
        marginRight: 10,
        alignItems: 'center',
    },
    groupImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    navbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#0E1419',
        alignItems: 'center',
        paddingVertical: 10,
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: '#fff',
    }
});

export default User;
