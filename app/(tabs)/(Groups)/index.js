import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import { groups } from '../../../assets/data';
import Group from '../../../components/Group';
import { useRouter } from 'expo-router';
import UserRoleContext from '../../../hooks/userContext';
import GroupTeacher from '../../../components/GroupTeacher';

const { width, height } = Dimensions.get('window');

const index = () => {
  const router = useRouter();
  const { roles } = useContext(UserRoleContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: width * 0.05, gap: 20 }}>

      {/* عنوان الانضمام إلى المجموعة */}
      <View style={{ width: '100%', flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
        <Text style={{ fontSize: width * 0.04, color: '#333' }}>Join group</Text>
        <Pressable onPress={() => router.push('/(Groups)/joinGroup')}>
          <Text style={{ fontSize: width * 0.07, color: '#555' }}>+</Text>
        </Pressable>
      </View>

      {/* المجموعات التي يقوم الأدمن بتدريسها */}
      {roles.includes("Teacher") && (
        <>
          <Text style={{ fontSize: width * 0.04, textAlign: 'left', width: '100%' }}>Teach groups</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: height * 0.02,
              flexDirection: 'row',
              alignItems: 'center',
              gap: width * 0.05,
            }}
            style={{ width: '100%', height: height * 0.1 }} // ارتفاع ديناميكي
          >
            {groups.map((group, index) => (
              <View key={group.id} style={{
                backgroundColor: 'red',
                width: width * 0.2,
                height: width * 0.2,
                borderRadius: width * 0.1,
                overflow: 'hidden',
              }}>
                <GroupTeacher
                  id={group.id}
                  image={"https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg"}
                />
              </View>
            ))}
          </ScrollView>
        </>
      )}

      {/* المجموعات الدراسية */}
      <Text style={{ fontSize: width * 0.04, textAlign: 'left', width: '100%' }}>Study groups</Text>
      <ScrollView
        contentContainerStyle={{
          padding: width * 0.05,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        style={{ width: '100%', height: height * 0.5 }} // ارتفاع ديناميكي
        showsVerticalScrollIndicator={false}
      >
        {groups && groups.length > 0 ? (
          groups.map((group, index) => (
            <View key={group.id} style={{ width: width * 0.8, marginBottom: height * 0.02 }}>
              <Group
                id={group.id}
                name={group.name}
                teacher={group.teacher}
                timing={group.timing}
                description={group.description}
                image={"https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg"}
              />
            </View>
          ))
        ) : (
          <Text style={{ fontSize: width * 0.04, color: '#888' }}>Nothing to be shown</Text>
        )}
      </ScrollView>

    </View>
  );
};

export default index;
