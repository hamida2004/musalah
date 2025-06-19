import { View, Text, Alert, Pressable, Image } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { posts } from '../../../assets/data';
import UserRoleContext from '../../../hooks/userContext';
import * as ImagePicker from 'expo-image-picker';
import { colors, styles } from '../../../assets/style';
import Input from '../../../components/Input';
import Btn from '../../../components/Btn';
import { Ionicons } from '@expo/vector-icons';

const EditPost = () => {
    const handleDeletePost = () => {
        alert('deleted succcusfully')
    }
    const { id } = useLocalSearchParams();
    const { roles, user } = useContext(UserRoleContext);

    const postFound = posts.find(post => post.id === Number(id));

    // ✅ تأكد من وجود المنشور عند التهيئة
    const [title, setTitle] = useState(postFound?.title || '');
    const [content, setContent] = useState(postFound?.content || '');
    const [imageUri, setImageUri] = useState(postFound?.image || '');

    // 📌 تحديث القيم عند تغيير `postFound` فقط
    useEffect(() => {
        if (postFound) {
            setTitle(postFound.title);
            setContent(postFound.content);
            setImageUri(postFound.image);
        }
    }, [postFound]);

    // 📷 اختيار الصورة
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

    // ✅ تأكيد الحفظ
    const confirmSavePost = () => {
        if (!user) {
            Alert.alert("Error", "User not found!");
            return;
        }
        if (!title.trim() || !content.trim()) {
            Alert.alert("Error", "Title and content cannot be empty!");
            return;
        }

        Alert.alert(
            "Confirm",
            "Are you sure you want to save modifications?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Yes", onPress: savePost },
            ]
        );
    };

    // 📝 حفظ التعديلات
    const savePost = () => {
        const postIndex = posts.findIndex(p => p.id === Number(id));
        if (postIndex !== -1) {
            posts[postIndex] = {
                ...posts[postIndex],
                title: title.trim(),
                content: content.trim(),
                image: imageUri,
            };
            Alert.alert("Success", "Post edited successfully!");
        }
    };

    return (
        <View style={{ gap: 20, ...styles.container }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Edit Post</Text>

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

            <Btn title="Save Changes" handlePress={confirmSavePost} />
            <Pressable
                onPress={handleDeletePost}
                style={{
                    width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                    gap: 8
                }}
            >
                <Text
                    style={{
                        color: 'red'
                    }}
                >
                    delete post
                </Text>
                <Ionicons name='trash-bin' color={'red'} size={24} />
            </Pressable>
        </View>
    );
};

export default EditPost;
