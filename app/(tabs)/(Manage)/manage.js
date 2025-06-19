import {ScrollView } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import { useRouter } from 'expo-router'

const manage = () => {

    const router = useRouter()
    return (
        <ScrollView
            style={{
                padding: 20,
            }}
        >
            <Container
                handleClick={() => {
                    router.push('(Manage)/manageRoles')
                }}
                image={"https://plus.unsplash.com/premium_photo-1684225765349-072e1a35afc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8fDA%3D"}
                title={"Manage Rules"}
                witdh={"100%"}
                height={200}

            />
            <Container
                handleClick={() => {
                    router.push('(Manage)/managePermissions')
                }}
                image={"https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVybWlzc2lvbnN8ZW58MHx8MHx8fDA%3D"}
                title={"Manage Permissions"}
                witdh={"100%"}
                height={200}            />
        </ScrollView>
    )
}

export default manage