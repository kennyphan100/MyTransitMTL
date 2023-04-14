import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, Button, SafeAreaView, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from './Header';

export default function Recharge() {

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.header}>
                <Header title="Dashboard"/>
            </View>

            <View>
                <Text>Recharge</Text>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
})
