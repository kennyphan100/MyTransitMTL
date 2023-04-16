import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, Keyboard, Button, Text, useWindowDimensions } from 'react-native';
import { MaterialIcons, Ionicons, AntDesign, FontAwesome5  } from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default function AddCard() {
    const navigation = useNavigation();
    const [ error, setError ] = useState();

    const {control, handleSubmit, formState: {errors}} = useForm();

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>


                {error ? <Text style={styles.error}>{error }</Text> : null}

                <View style={styles.cardNumberTitleContainer}>
                    <Text style={styles.cardNumberTitleText}>Card Number</Text> 
                </View>

                <CustomInput 
                    name="cardNumber"
                    placeholder="XXXX XXXX XXXX XXXX"
                    control={control}
                    icon={<Ionicons name="card-outline" size={24} color="black" />}
                />
                
                <View style={styles.expirationDateTitleContainer}>
                    <Text style={styles.expirationDateTitleText}>Exp Date</Text> 
                </View>

                <CustomInput 
                    name="expirationDate"
                    placeholder="MM/YY"
                    control={control}
                    icon={<AntDesign name="calendar" size={24} color="black" />}
                />

                <View style={styles.cvvTitleContainer}>
                    <Text style={styles.cvvTitleText}>CVV</Text> 
                </View>

                <CustomInput 
                    name="CVV"
                    placeholder="CVV"
                    control={control}
                    icon={<MaterialIcons name="security" size={24} color="black" />}
                />

                <View style={styles.countryTitleContainer}>
                    <Text style={styles.countryTitleText}>Country</Text> 
                </View>

                <CustomInput 
                    name="country"
                    placeholder="Canada"
                    control={control}
                    icon={<MaterialIcons name="place" size={24} color="black" />}
                />

                <View style={styles.postalCodeTitleContainer}>
                    <Text style={styles.postalCodeTitleText}>Postal Code</Text> 
                </View>

                <CustomInput 
                    name="postalCode"
                    placeholder="H4B 0A2"
                    control={control}
                    icon={<FontAwesome5 name="house-user" size={24} color="black" />}
                />

                <View style={styles.buttonContainer}>
                    <Button color='#65C271' title='Add' />
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
        borderTopWidth: 1,
    },
    myTransitMTLLogo: {
        width: 300,
        height: 300,
    },
    buttonContainer: {
        margin: 10,
        marginTop: 20,
        borderRadius: 5,
        overflow: 'hidden',
        width: '30%',
        
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
    error: {
        color: 'red',
    },
    cardNumberTitleContainer: {
        width: '57%',
        marginTop: 20,
    },
    cardNumberTitleText: {
        fontSize: 18,
    },
    expirationDateTitleContainer: {
        width: '57%',
        marginTop: 10,
    },
    expirationDateTitleText: {
        fontSize: 18,
    },
    cvvTitleContainer: {
        width: '57%',
        marginTop: 10,
    },
    cvvTitleText: {
        fontSize: 18,
    },  
    countryTitleContainer: {
        width: '57%',
        marginTop: 10,
    },
    countryTitleText: {
        fontSize: 18,
    },  
    postalCodeTitleContainer: {
        width: '57%',
        marginTop: 10,
    },
    postalCodeTitleText: {
        fontSize: 18,
    },  
})