import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { styles } from '../../../assets/style';
import Post from '../../../components/Post';
import { posts } from '../../../assets/data';
import userRoleContext from '../../../hooks/userContext';
import { useRouter } from 'expo-router'
const Index = () => {
  const { roles } = useContext(userRoleContext);
  const [search, setSearch] = useState('');
  const router = useRouter()

  return (
    <>
      {roles.includes("Admin") && (
        <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: 20,
          flexDirection: 'row',
        }}
      >
        <TextInput
          placeholder="Search actuality"
          style={{
            width: '60%',
            borderRadius: 4,
            borderWidth: 2,
            borderColor: '#888',
            padding: 4,
          }}
          value={search}
          onChangeText={setSearch}
        />
        <Pressable
          onPress={() => {
            router.push('/(Home)/addPost')
          }}
        >
          <Text
            style={{
              fontSize: 28,
              color: '#888',
            }}
          >
            +
          </Text>
        </Pressable>
      </View>
      )}
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          paddingTop: 0,
        }}
        showsVerticalScrollIndicator={false}
      >
        {posts.length > 0 ? (
          posts
            .filter(
              (post) =>
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.content.toLowerCase().includes(search.toLowerCase())
            )
            .map((post) => (
              <Post
                id={post.id}
                editable={roles.includes('Admin')}
                key={post.id}
                title={post.title}
                content={post.content}
                image="https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg"
              />
            ))
        ) : (
          <Text style={styles.normal}>Nothing to be shown</Text>
        )}
      </ScrollView>
    </>
  );
};

export default Index;
