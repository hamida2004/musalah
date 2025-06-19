import { View, Text, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from '../assets/style'

const Container = ({ width, height, title, image, handleClick }) => {
    return (
        <Pressable onPress={handleClick}
            style={{
                width: width,
                height: height,
                elevation: 4,
                borderRadius: 20,
                overflow: 'hidden',
                marginBottom:20
                
            }}
        >
            <ImageBackground 
                source={image} 
                style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center' }}
                resizeMode="cover"
            >
                {/* طبقة شفافة فوق الخلفية */}
                <View style={{ 
                    position: 'absolute', 
                    width: "100%", 
                    height: "100%", 
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // تعديل الشفافية حسب الحاجة
                    borderRadius: 20
                }} />

                {/* النص فوق الصورة */}
                <Text style={[styles.header, { color: 'white', fontWeight: 'bold', fontSize: 18 }]}>
                    {title}
                </Text>
            </ImageBackground>
        </Pressable>
    )
}

export default Container
