import React, { useContext, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Tabs, useRouter } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../assets/style';
import UserRoleContext from '../../hooks/userContext';

const Layout = () => {
  const { roles } = useContext(UserRoleContext);
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/(auth)/Login');
  };

  const renderHeaderLeft = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: colors.white, fontSize: 16, fontWeight: 'bold' }}>M</Text>
      </View>
      <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: '500', color: colors.primary }}>
        Musalah
      </Text>
    </View>
  );

  const renderHeaderRight = (isAccountScreen = false) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
      {!isAccountScreen ? (
        <>
          <TouchableOpacity style={{ marginRight: 10 }} onPress={() => router.push('/Notifications')}>
            <Ionicons name="notifications-outline" size={28} color={'red'} />
          </TouchableOpacity>
          {roles.includes("Teacher") && (
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => router.push('/Requests')}>
              <Ionicons name="git-pull-request-outline" size={28} color={colors.primary} />
            </TouchableOpacity>
          )}
          {roles.includes("Admin") && (
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => router.push('/(Manage)/manage')}>
              <MaterialIcons name="manage-accounts" size={28} color={colors.primary} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => router.push('/(tabs)/(Account)')}>
            <Image
              source={require('../../assets/avatar.jpg')}
              style={{
                width: 35,
                height: 35,
                borderRadius: 17.5,
                borderWidth: 2,
                borderColor: colors.primary,
              }}
            />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={28} color={'red'} />
        </TouchableOpacity>
      )}
    </View>
  );

  const screens = useMemo(() => {
    const baseScreens = [
      { name: "(Home)", title: "Home", icon: "home" },
      { name: "(Groups)", title: "Groups", icon: "people" },
      { name: "(Account)", title: "Account", icon: "person", isAccountScreen: true },
      { name: "(Manage)", title: "Manage", icon: "settings-outline" }
    ];

    // if (roles.includes("Admin")) {
    //   baseScreens.push({ name: "(Manage)", title: "Manage", icon: "settings-outline" });
    // }

    return baseScreens;
  }, [roles]);

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.white, elevation: 2 },
        headerTitle: '',
        tabBarActiveTintColor: '#062631',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      {screens.map(({ name, title, icon, isAccountScreen }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            headerLeft: renderHeaderLeft,
            headerRight: () => renderHeaderRight(isAccountScreen),
            tabBarIcon: ({ focused, size }) => (
              <Ionicons name={icon} color={focused ? '#062631' : 'grey'} size={size} />
            ),
            title,
          }}
        />
      ))}
    </Tabs>
  );
};

export default Layout;