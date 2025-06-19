import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { roles, permissions, rolePermissions } from "../../../assets/data";

const ManageRoles = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const openEditModal = (role) => {
    setSelectedRole(role);
    const rolePerms = rolePermissions.filter((rp) => rp.roleId === role.id).map((rp) => rp.permissionId);
    setSelectedPermissions(rolePerms);
    setModalVisible(true);
  };

  const togglePermission = (permissionId) => {
    setSelectedPermissions((prev) =>
      prev.includes(permissionId)
        ? prev.filter((id) => id !== permissionId)
        : [...prev, permissionId]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE ROLES</Text>
      {roles.map((role) => (
        <View key={role.id} style={styles.roleContainer}>
          <Text style={styles.roleTitle}>{role.name}</Text>
          <TouchableOpacity onPress={() => openEditModal(role)}>
            <Ionicons name="pencil-outline" size={20} color="black" style={styles.editIcon} />
          </TouchableOpacity>
        </View>
      ))}

      {/* Edit Role Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Ionicons name="close-outline" size={24} color="red" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>EDIT ROLE</Text>
            <Text style={styles.modalRole}>{selectedRole?.name}</Text>
            <ScrollView>
              {permissions.map((permission) => (
                <TouchableOpacity
                  key={permission.id}
                  style={styles.permissionItem}
                  onPress={() => togglePermission(permission.id)}
                >
                  <Ionicons
                    name={selectedPermissions.includes(permission.id) ? "checkbox" : "square-outline"}
                    size={20}
                    color="black"
                  />
                  <Text style={styles.permissionText}>{permission.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.confirmButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F0F5F3" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  roleContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  roleTitle: { fontSize: 18, fontWeight: "bold" },
  editIcon: { marginLeft: 10 },
  modalOverlay: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
  modalContent: { width: "80%", backgroundColor: "white", padding: 20, borderRadius: 10 },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  modalRole: { fontSize: 16, marginBottom: 10 },
  permissionItem: { flexDirection: "row", alignItems: "center", paddingVertical: 5 },
  permissionText: { fontSize: 16, marginLeft: 10 },
  closeButton: { position: "absolute", top: 20, right: 20 },
  confirmButton: { backgroundColor: "#4A7F5D", padding: 10, borderRadius: 5, alignItems: "center", marginTop: 10 },
  confirmText: { color: "white", fontSize: 16 }
});

export default ManageRoles;