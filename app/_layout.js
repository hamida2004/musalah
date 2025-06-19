import React, { useContext, useEffect } from 'react';
import { Stack } from 'expo-router';
import{ UserRoleProvider } from '../hooks/userContext';

export default function RootLayout() {

  
    return (
        <UserRoleProvider>

            <Stack screenOptions={{ headerShown: false }} />
        </UserRoleProvider>

    );
}
