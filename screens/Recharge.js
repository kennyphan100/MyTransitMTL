import React, {useState} from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Text, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Pass from './Pass';

export default function Recharge() {
    const [total, setTotal] = useState(0);

    const [passes, setPasses] = useState([
        { title: '1-trip fare, All Modes A', price: '$3,50', quantity: 0},
        { title: '2-trip fare, All Modes A', price: '$7,50', quantity: 0},
        { title: '10-trip fare, All Modes A', price: '$31,50', quantity: 0},
        { title: 'Unlimited evening pass', price: '$31,50', quantity: 0},
        { title: '24-hour pass, All Modes A', price: '$31,50', quantity: 0},
        { title: '3-day pass, All Modes A', price: '$31,50', quantity: 0},
        { title: 'Weekly pass, All Modes A', price: '$29,50', quantity: 0},
        { title: 'Monthly pass, All Modes A', price: '$56,50', quantity: 0},
    ]);

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.passesContainer}>
                <FlatList
                    data={passes}
                    renderItem={({ item, index }) => {
                        return <Pass pass={item} />
                    }}
                />
            </View>

            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: ${total}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text style={styles.button}>Purchase</Text>
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
        height: '50%',
        // justifyContent: 'center',
    },
    passesContainer: {
        backgroundColor: '#D9D9D9',
        margin: 10,
        width: '85%',
        height: '70%',
        borderRadius: 20,
        padding: 10,
    },
    totalContainer: {
        margin: 10,
    },
    totalText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    button: {
        color: 'white',
        backgroundColor: '#65C271',
        fontSize: 22,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
    }
})
