import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { colors, styles } from '../assets/style';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Post = ({ id, title, content, image, editable }) => {
  const router = useRouter();

  return (
    <View
      style={{
        ...styles.container,
        elevation: 2,
        borderRadius: 8,
        width: '100%',
        marginVertical: 16,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 🖼️ Image with fallback */}
      <Image
        source={{ uri: image || 'https://via.placeholder.com/150' }}
        style={{ width: '100%', height: 100 }}
        resizeMode="cover"
      />

      {/* ✏️ Edit button (only if editable) */}
      {editable && (
        <View style={{ position: 'absolute', top: 20, right: 20 }}>
          <Pressable
            onPress={() => router.push({ pathname: '/(Home)/editPost', params: { id } })}
          >
            <Ionicons name="pencil" size={28} color="orange" />
          </Pressable>
        </View>
      )}

      {/* 📌 Post Title */}
      <Text style={styles.header}>{title}</Text>

      {/* 📜 Post Content */}
      <Text style={styles.normal}>{content}</Text>
    </View>
  );
};

export default Post;
