import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { notifications } from '../assets/data'
import { colors, styles } from '../assets/style'

const Notifications = () => {
  return (
    <View
      style={{
        padding: 20
      }}
    >
      <Text
        style={{
          ...styles.header,
          textAlign: 'left'

        }}
      >
        Notifications
      </Text>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        {notifications ? notifications.slice(0, 50).map((notification, index) => {
          let time = new Date(notification.timestamp).toISOString()
          return (
            <Pressable
              onPress={() => {
                console.log('Notification Pressed')
              }}
              key={index} style={{ borderRadius: 4, elevation: 2, padding: 10, margin: 4, backgroundColor: notification.read ? 'lightgrey' : colors.white, borderColor: colors.primary, borderWidth: 1 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Text
                  style={{ fontWeight: '600' }}
                >{notification.title}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 20
                  }}
                >
                  <Text
                    style={{ fontWeight: '600', color: '#555', fontSize: 12 }}

                  >{notification.by}</Text>
                  <Text
                    style={{ color: '#555', fontSize: 12 }}

                  >{time.split('T')[0]} | {time.split('T')[1].slice(0, 5)}</Text>
                </View>
              </View>
              <Text>{notification.message}</Text>

            </Pressable>
          )
        }) : <Text>No notification found </Text>}
      </ScrollView>
    </View>
  )
}

export default Notifications