import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logoImg from '../assets/images/logo/splash.logo.png';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#8257E5'
    },
    description: {
        fontSize: 18,
        fontFamily: 'Inter-Regular',
        maxWidth: 170,
        color: '#fff',
        textAlign: 'center',
        marginTop: 40
    }
})

export function Splash(){
    return (
        <View style={styles.container}>
            <Image source={logoImg} />
            <Text style={styles.description}>Seu aplicativo favorito de afazeres</Text>
        </View>
    )
}
