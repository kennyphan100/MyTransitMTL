import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, Button, Text, useWindowDimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
// import { useForm, Controller } from 'react-hook-form';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const pressLoginHandler = () => {
        navigation.navigate('Dashboard')
    }

    const pressCreateAccount = () => {
        navigation.navigate('Signup')
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Image style={[styles.myTransitMTLLogo, {height: height * 0.3}]} source={require('../assets/MyTransitMTL.png')} />

                <CustomInput
                    placeholder="Email"
                    icon={<MaterialIcons style={styles.icon} name="email" size={24} color="black" />}
                    value={email}
                    setValue={setEmail}
                />

                <CustomInput
                    placeholder="Password"
                    icon={<MaterialIcons style={styles.icon} name="vpn-key" size={24} color="black" />}
                    value={password}
                    setValue={setPassword}
                />                

                <View style={styles.buttonContainer}>
                    <Button color='#65C271' title='Log In' onPress={pressLoginHandler} />
                </View>

                <View style={styles.bottomTextContainer}>
                    <Text>
                        Don't have an account?  {""}
                        <Text style={styles.createAccountText} onPress={pressCreateAccount}>Create One</Text>
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
        width: '50%',
    },
    bottomTextContainer: {
        margin: 10,
    },
    icon: {
        marginTop: 5
    },
    createAccount: {
        
    },
    createAccountText: {
        color: '#0645AD'
    },
})
