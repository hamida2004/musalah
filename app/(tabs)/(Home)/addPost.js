import { View, Text, Pressable, Alert, Image } from 'react-native';
import Input from '../../../components/Input';
import Btn from '../../../components/Btn';
import React, { useContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { posts } from '../../../assets/data';
import userRoleContext from '../../../hooks/userContext';
import { colors, styles } from '../../../assets/style';

const AddPost = () => {
    const { roles, user } = useContext(userRoleContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [postList, setPostList] = useState(posts);
    const [imageUri, setImageUri] = useState(null);

    // دالة اختيار الصورة
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    // دالة تأكيد الإضافة
    const confirmAddPost = () => {
        if (!user) {
            Alert.alert("Error", "User not found!");
            return;
        }
        if (!title.trim() || !content.trim()) {
            Alert.alert("Error", "Title and content cannot be empty!");
            return;
        }

        Alert.alert(
            "Confirm", // العنوان
            "Are you sure you want to add this post?", // النص
            [
                { text: "Cancel", style: "cancel" }, // زر الإلغاء
                { text: "Yes", onPress: addPost }, // زر التأكيد
            ]
        );
    };

    // دالة إضافة المنشور
    const addPost = () => {
        const newPost = {
            id: postList.length + 1,
            title: title.trim(),
            content: content.trim(),
            time: new Date().toISOString(),
            writer: user.name,
            image: imageUri,
        };

        setPostList([newPost, ...postList]);
        setTitle('');
        setContent('');
        setImageUri(null);
        Alert.alert("Success", "Post added successfully!");
    };

    return (
        <View style={{ gap: 20, ...styles.container }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Add Post</Text>

            {roles.includes("Admin") && (
                <Pressable
                    onPress={pickImage}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 100,
                        height: 100,
                        borderColor: colors.primary,
                        borderWidth: 2,
                        borderRadius: 4,
                        overflow: 'hidden',
                    }}
                >
                    {imageUri ? (
                        <Image source={{ uri: imageUri }} style={{ width: '100%', height: '100%' }} />
                    ) : (
                        <Text style={{ fontSize: 32, color: '#888' }}>+</Text>
                    )}
                </Pressable>
            )}

            <Input value={title} handleChange={setTitle} placeholder="Post title" />
            <Input value={content} handleChange={setContent} placeholder="Post content" multiline />

            <Btn title="Add Post" handlePress={confirmAddPost} />
        </View>
    );
};

export default AddPost;
