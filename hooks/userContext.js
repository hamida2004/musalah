import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// إنشاء السياق
const UserRoleContext = createContext();

// مزود السياق (Context Provider)
export const UserRoleProvider = ({ children }) => {
  const [roles, setRoles] = useState(["Student","Teacher"]); // الدور الافتراضي
  const [user, setUser] = useState({
    
  });

  // تحميل البيانات من AsyncStorage عند بدء التطبيق
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        const storedRoles = await AsyncStorage.getItem("userRoles");

        if (storedUser) setUser(JSON.parse(storedUser));
        if (storedRoles) setRoles(JSON.parse(storedRoles));
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };

    loadUserData();
  }, []);

  // تحديث أدوار المستخدم وتخزينها
  const updateRoles = async (newRole) => {
    try {
      const updatedRoles = [...roles, newRole];
      setRoles(updatedRoles);
      await AsyncStorage.setItem("userRoles", JSON.stringify(updatedRoles));
    } catch (error) {
      console.error("Failed to update roles:", error);
    }
  };


  const updateUser = async (user) => {
    setUser(user)
    await AsyncStorage.setItem("user", JSON.stringify(user))
  }


  // إزالة دور معين من المستخدم
  const removeRole = async (role) => {
    try {
      const updatedRoles = roles.filter((r) => r !== role);
      setRoles(updatedRoles);
      await AsyncStorage.setItem("userRoles", JSON.stringify(updatedRoles));
    } catch (error) {
      console.error("Failed to remove role:", error);
    }
  };

  return (
    <UserRoleContext.Provider value={{ user, updateUser, roles, updateRoles, removeRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

// دالة مخصصة لاستخدام السياق بسهولة
export const useUserRole = () => {
  return useContext(UserRoleContext);
};

export default UserRoleContext;
