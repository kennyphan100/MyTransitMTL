import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList, Text, Image, Touchable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AddPaymentMethod() {
    const navigation = useNavigation();

    const onAddCardPress = () => {
        navigation.navigate("Add Card")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.paymentMethodsContainer}>
                <TouchableOpacity style={styles.paymentMethodsContainer1} onPress={onAddCardPress}>
                    <Image style={styles.logo} source={require('../assets/applePay.png')} />
                    
                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>Apple Pay</Text>
                    </View>

                    <View style={styles.editPaymentMethodsContainer}>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black"/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentMethodsContainer1} onPress={onAddCardPress}>
                    <Image style={styles.logo} source={require('../assets/card.png')} />
                    
                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>Credit or debit card</Text>
                    </View>

                    <View style={styles.editPaymentMethodsContainer}>
                    <TouchableOpacity>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" onPress={onAddCardPress} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentMethodsContainer1} onPress={onAddCardPress}>
                    <Image style={styles.logo} source={require('../assets/paypal.png')} />
                    
                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>Paypal</Text>
                    </View>

                    <View style={styles.editPaymentMethodsContainer}>
                        <TouchableOpacity>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" onPress={onAddCardPress} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopWidth: 1,
    },
    paymentMethodsContainer: {
        backgroundColor: '#D9D9D9',
        margin: 10,
        width: '90%',
        height: '25%',
        borderRadius: 20,
        padding: 10,
    },
    paymentMethodsContainer1: {
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
    },
    textContainer: {
        flexDirection: 'column',
    },
    nameText: {
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