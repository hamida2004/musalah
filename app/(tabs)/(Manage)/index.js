import GroupTeacher from '../../../components/GroupTeacher';
import UserTeacher from '../../../components/UserTeacher';
import { View, Text, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import UserRoleContext from '../../../hooks/userContext';
import { groups, users } from '../../../assets/data';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();
  const [searchGroup, setSearchGroup] = useState('');
  const [searchTeacher, setSearchTeacher] = useState('');
  const [searchStudent, setSearchStudent] = useState('');
  const { width } = Dimensions.get('window');
  const { roles } = useContext(UserRoleContext);

  const filteredGroups = groups?.filter(group => group.name.toLowerCase().includes(searchGroup.toLowerCase())) || [];
  const filteredTeachers = users?.filter(user => user.roles?.includes('Teacher') && user.name.toLowerCase().includes(searchTeacher.toLowerCase())) || [];
  const filteredStudents = users?.filter(user => user.roles?.includes('Student') && user.name.toLowerCase().includes(searchStudent.toLowerCase())) || [];

  return (
    <>
      {roles?.includes('Admin') ? (
        <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20 }}>

          {/* قسم المجموعات */}
          <View style={styles.sectionHeader}>
            <Text>Groups</Text>
            <TextInput placeholder="Search group" style={styles.searchInput} value={searchGroup} onChangeText={setSearchGroup} />
            <Pressable onPress={() => router.push('/(Groups)/addGroup')}>
              <Text style={styles.addButton}>+</Text>
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group) => (
                <View key={group.id} style={styles.groupContainer}>
                  <GroupTeacher id={group.id} image={"https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg"} />
                </View>
              ))
            ) : (
              <Text>No groups found</Text>
            )}
          </ScrollView>

          {/* قسم الأساتذة */}
          <View style={styles.sectionHeader}>
            <Text>Teachers</Text>
            <TextInput placeholder="Search teacher" style={styles.searchInput} value={searchTeacher} onChangeText={setSearchTeacher} />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher) => (
                <View key={teacher.id} style={styles.roundedContainer}>
                  <UserTeacher id={teacher.id} image={"https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg"} borderRadius={width * 0.1} />
                </View>
              ))
            ) : (
              <Text>No teachers found</Text>
            )}
          </ScrollView>

          {/* قسم الطلاب */}
          <View style={styles.sectionHeader}>
            <Text>Students</Text>
            <TextInput placeholder="Search student" style={styles.searchInput} value={searchStudent} onChangeText={setSearchStudent} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.studentGrid}>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <View key={student.id} style={styles.roundedContainer}>
                  <UserTeacher id={student.id} image={"https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg"} borderRadius={width * 0.1} />
                </View>
              ))
            ) : (
              <Text>No students found</Text>
            )}
          </ScrollView>
        </ScrollView>
      ) : (
       <View
       style={styles.container}
       >
         <Text>Unauthorized to do this function</Text>
       </View>
      )}
    </>
  );
};

const styles = {
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  sectionHeader: { alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: 20, flexDirection: 'row' },
  searchInput: { width: '60%', borderRadius: 4, borderWidth: 2, borderColor: '#888', padding: 4 },
  addButton: { fontSize: 28, color: '#888' },
  horizontalScroll: { paddingVertical: 10, flexDirection: 'row', alignItems: 'center', gap: 20 },
  groupContainer: { width: 80, height: 80, borderRadius: 20, overflow: 'hidden' },
  roundedContainer: { width: 80, height: 80, borderRadius: 40, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 },
  studentGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10, paddingVertical: 10 },
};

export default Index;
