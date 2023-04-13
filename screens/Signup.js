import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, Keyboard, Button, useWindowDimensions, Text } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default function Signup() {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}, watch } = useForm();
    const pwd = watch('password');

    const onCreateAccountPressed = (data) => {
        console.warn("create account pressed");
        navigation.navigate('Dashboard')
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Image style={[styles.myTransitMTLLogo, {height: height * 0.3}]} source={require('../assets/MyTransitMTL.png')} />

                <CustomInput 
                    name="firstName"
                    placeholder="First Name"
                    control={control}
                    rules={{required: 'First name is required'}}
                    icon={<FontAwesome style={styles.icon} name="user" size={24} color="black" />}
                />

                <CustomInput 
                    name="lastName"
                    placeholder="Last Name"
                    control={control}
                    rules={{required: 'Last Name is required'}}
                    icon={<FontAwesome style={styles.icon} name="user" size={24} color="black" />}
                />

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
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 4,
                            message: 'Password should at least 4 characters long'
                        }
                    }}
                    icon={<MaterialIcons style={styles.icon} name="vpn-key" size={24} color="black" />}
                    secureTextEntry
                />

                <CustomInput 
                    name="passwordRepeat"
                    placeholder="Repeat Password"
                    control={control}
                    rules={{
                        validate: value => value === pwd || 'Password do not match',
                    }}
                    icon={<MaterialIcons style={styles.icon} name="vpn-key" size={24} color="black" />}
                    secureTextEntry
                />

                <View style={styles.buttonContainer}>
                    <Button color='#65A0C2' title='Create account' onPress={handleSubmit(onCreateAccountPressed)} />
                </View>

                <Text style={styles.policyText}>By registering, you confirm that you accept our Terms of Use and Privacy Policy.</Text>

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
        margin: 5,
        borderRadius: 5,
        overflow: 'hidden',
        width: '50%',
    },
    policyText: {
        color: 'gray',
        width: '80%',
        margin: 5,
    }
})
