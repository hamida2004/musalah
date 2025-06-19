import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { groups, requests, users } from '../assets/data';
import { styles } from '../assets/style';

const Requests = () => {
  return (
    <View
      style={{
        padding: 20,
        gap: 20
      }}
    >
      <Text
        style={styles.header}
      >
        Groups joining requests
      </Text>
      {requests?.length > 0 ? (
        requests
          .filter((req) => req.status !== 'approved')
          .map((req, index) => {
            const userFound = users.find((user) => user.id === req.userId);
            const groupFound = groups.find((group) => group.id === req.GroupId);

            return (
              <View key={index} style={{
                marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                borderRadius: 2,
                elevation: 2
              }}>
                <Text>{userFound ? userFound.name : 'Unknown User'}</Text>
                <Text>{groupFound ? groupFound.name : 'Unknown Group'}</Text>

                <Pressable onPress={() => console.log('Rejected', req.id)}>
                  <Text style={{ color: 'red' }}>Reject</Text>
                </Pressable>

                <Pressable onPress={() => console.log('Accepted', req.id)}>
                  <Text style={{ color: 'green' }}>Accept</Text>
                </Pressable>
              </View>
            );
          })
      ) : (
        <Text>No requests found</Text>
      )}
    </View>
  );
};

export default Requests;
