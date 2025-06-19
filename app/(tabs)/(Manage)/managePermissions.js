import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, Modal, TextInput, CheckBox } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { permissions as perms, rolePermissions } from '../../../assets/data';

const ManagePermissions = () => {
    const [permissions, setPermissions] = useState(perms);

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPermission, setSelectedPermission] = useState({});
    const openModal = (permission) => {
        setSelectedPermission(permission)
        setModalVisible(true);
    };



    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#EEF4F1' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Manage Permissions</Text>

            <FlatList
                data={permissions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <Text>{item.name}</Text>
                        <Pressable onPress={() => openModal(item)}>
                            <Feather name="edit" size={20} color="black" />
                        </Pressable>
                    </View>
                )}
            />

            {/* Modal for Editing Permission */}
            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#FFF', padding: 20, borderRadius: 10, width: '80%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Edit Permission:</Text>
                            <Pressable onPress={() => setModalVisible(false)}>
                                <AntDesign name="close" size={20} color="black" />
                            </Pressable>
                        </View>
                        <TextInput
                            value={selectedPermission.name}

                            onChangeText={(value) => {
                                setSelectedPermission(value)
                            }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Pressable onPress={() => setModalVisible(false)}>
                                <Text style={{ color: 'red' }}>Cancel</Text>
                            </Pressable>
                            <Pressable onPress={() => setModalVisible(false)}>
                                <Text style={{ color: 'green' }}>Confirm</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ManagePermissions;
