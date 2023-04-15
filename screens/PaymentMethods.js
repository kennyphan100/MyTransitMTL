import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function PaymentMethods({ paymentMethod }) {

    if (paymentMethod.type == "Apple Pay") {
        return (
            <View style={styles.paymentMethodsContainer}>
                <Image style={styles.logo} source={require('../assets/applePay.png')} />
                
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{paymentMethod.name}</Text>
                </View>

                <View style={styles.editPaymentMethodsContainer}>
                    <Entypo name="edit" size={22} color="black" />
                </View>
            </View>
        );

    } else if (paymentMethod.type == "MasterCard") {
        return (
            <View style={styles.paymentMethodsContainer}>
                <Image style={styles.logo} source={require('../assets/mastercard.png')} />
                
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{paymentMethod.name}</Text>
                </View>

                <View style={styles.editPaymentMethodsContainer}>
                    <Entypo name="edit" size={22} color="black" />
                </View>
            </View>
        );

    } 
    else if (paymentMethod.type == "Paypal") {
        return (
            <View style={styles.paymentMethodsContainer}>
                <Image style={styles.logo} source={require('../assets/paypal.png')} />
                
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{paymentMethod.name}</Text>
                </View>

                 <View style={styles.editPaymentMethodsContainer}>
                    <Entypo name="edit" size={22} color="black" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    paymentMethodsContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    textContainer: {
        flexDirection: 'column',
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
    },
    dateText: {
        fontSize: 14,
    },
    logo: {
      width: 50,
      height: 50,
      marginRight: 15,
    },
    editPaymentMethodsContainer: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
  });