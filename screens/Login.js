import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, Keyboard, Button, Text, useWindowDimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default function Login() {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}} = useForm();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate('Dashboard');
            } else {
                console.warn("invalid credentials");
            }
        })

        return unsubscribe;
    }, [])

    const onLogInPressed = (data) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });

        // navigation.navigate('Dashboard')
    }

    const onCreateAccountPressed = () => {
        navigation.navigate('Signup')
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Image style={[styles.myTransitMTLLogo, {height: height * 0.3}]} source={require('../assets/MyTransitMTL.png')} />

                <CustomInput 
                    name="email"
                    placeholder="Email"
                    control={control}
                    rules={{
                        required: 'Email is required',
                        pattern: {value: EMAIL_REGEX, message: 'Invalid email'},
                    }}
                    icon={<MaterialIcons style={styles.icon} name="email" size={24} color="black" />}
                />

                <CustomInput 
                    name="password"
                    placeholder="Password"
                    control={control}
                    rules={{required: 'Password is required'}}
                    icon={<MaterialIcons style={styles.icon} name="vpn-key" size={24} color="black" />}
                    secureTextEntry
                />

                <View style={styles.buttonContainer}>
                    <Button color='#65C271' title='Log In' onPress={handleSubmit(onLogInPressed)} />
                </View>

                <View style={styles.bottomTextContainer}>
                    <Text>
                        Don't have an account?  {""}
                        <Text style={styles.createAccountText} onPress={onCreateAccountPressed}>Create One</Text>
                    </Text>
                </View>

            </View>
        </TouchableWithoutFeedback>        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    myTransitMTLLogo: {
        width: 300,
        height: 300,
    },
    buttonContainer: {
        margin: 10,
        borderRadius: 5,
        overflow: 'hidden',
        width: '60%',
    },
    bottomTextContainer: {
        margin: 10,
    },
    icon: {
        marginTop: 5
    },
    createAccountText: {
        color: '#0645AD',
        textDecorationLine: 'underline'
    },
})
