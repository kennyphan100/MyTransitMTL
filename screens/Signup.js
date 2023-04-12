import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, Button, useWindowDimensions, Text } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();


    const onPressCreateAccount = () => {
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
                    placeholder="First Name"
                    icon={<FontAwesome style={styles.icon} name="user" size={24} color="black" />}
                    value={firstName}
                    setValue={setFirstName}
                />

                <CustomInput
                    placeholder="Last Name"
                    icon={<FontAwesome style={styles.icon} name="user" size={24} color="black" />}
                    value={lastName}
                    setValue={setLastName}
                />

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

                <CustomInput
                    placeholder="Repeat Password"
                    icon={<MaterialIcons style={styles.icon} name="vpn-key" size={24} color="black" />}
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                />      

                <View style={styles.buttonContainer}>
                    <Button color='#65A0C2' title='Create account' onPress={onPressCreateAccount} />
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
    icon: {
        marginTop: 5
    },
    policyText: {
        color: 'gray',
        width: '80%',
        margin: 5,
    }
})
