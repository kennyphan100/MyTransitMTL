import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import PaymentMethods from './PaymentMethods';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Foundation } from '@expo/vector-icons'; 
import AddPaymentMethod from './AddPaymentMethod';

export default function Wallet() {
    const navigation = useNavigation();

    const [paymentMethods, setPaymentMethods] = useState([
        { type: 'Apple Pay', name: 'Apple Pay'},
        { type: 'MasterCard', name: '**** 1234'},
        { type: 'Paypal', name: 'Paypal'},
    
    ]);

    const onAddPaymentMethodPress = () => {
        navigation.navigate("Add Payment Method")
    }

    return (
        <SafeAreaView style={styles.container}>
            
            {/* <View style={styles.header}>
                <Header title="Dashboard"/>
            </View> */}

            <View style={styles.myWalletContainter}>
                <Text style={styles.myWalletTripText}>Trip funds</Text>

                <Text style={styles.myWalletFundsText}>$0,00</Text>

                <View style={styles.myWalletWarningContainer}>
                    <Text style={styles.myWalletWarningText}>
                        <Foundation name="info" size={20} color="black" /> Used when you have no OPUS passes
                    </Text>
                </View>

                <View style={styles.myWalletButtons}>
                    <View style={styles.buttonContainer}>
                        <Button color='#65C271' title='Add funds' />
                    </View>
                </View>

            </View>


            <View style={styles.myPaymentMethodsTitleContainer}>
                <Text style={styles.paymentMethodsTitleText}>Payment methods</Text> 
            </View>

            <View style={styles.myPaymentMethodsContainer}>
                <FlatList
                    data={paymentMethods}
                    renderItem={({ item, index }) => {
                        return <PaymentMethods paymentMethod={item} />
                    }}
                />
            </View>

            <View style={styles.myWalletButtons}>
                    <View style={styles.buttonContainer}>
                        <Button color='#65C271' title='Add payment method' onPress={onAddPaymentMethodPress}/>
                    </View>
                </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    myWalletContainter: {
        backgroundColor: '#D9D9D9',
        margin: 10,
        padding: 20,
        borderRadius: 20,
        width: '80%',
        height: '32%',
    },
    myWalletTripText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 8,
    },
    myWalletFundsText: {
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: 8,
    },
    myWalletWarningContainer: {
        flexDirection: 'row',
        alignItems:'center',
    },
    myWalletWarningText: {
        fontSize: 12,
        marginTop: 8,
        marginBottom: 8,
    },
    myWalletButtons: {
        flexDirection: 'row',
        marginTop: 8,
    },
    myPaymentMethodsContainer: {
        backgroundColor: '#D9D9D9',
        margin: 10,
        width: '80%',
        height: '25%',
        borderRadius: 20,
        padding: 10,
    },
    myPaymentMethodsTitleContainer: {
        width: '80%',
    },
    paymentMethodsTitleText: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5,
    },  
    input: {
        flexDirection: 'row',
    },
    inputText: {
        marginBottom: 20,
        marginLeft: 5,
        fontWeight: 'bold',
        width: 170,
        height: 35,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        paddingLeft: 5,
    },
    buttonContainer: {
        borderRadius: 5,
        overflow: 'hidden',
    },
})