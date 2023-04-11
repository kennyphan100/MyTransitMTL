import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function TransactionMetro({ transaction }) {

    if (transaction.type == "Metro") {
        return (
            <View style={styles.transactionContainer}>
                <Image style={styles.metroLogo} source={require('../assets/metro.png')} />
                
                <View style={styles.textContainer}>
                    <Text style={styles.typeText}>{transaction.name}</Text>
                    <Text style={styles.dateText}>{transaction.date}</Text>
                </View>

                <View style={styles.passContainer}>
                    <Text style={styles.passused}>- {transaction.numberOfPassUsed} pass</Text>
                </View>
            </View>
        );

    } else if (transaction.type == "Bus") {
        return (
            <View style={styles.transactionContainer}>
                <Image style={styles.metroLogo} source={require('../assets/bus.png')} />
                
                <View style={styles.textContainer}>
                    <Text style={styles.typeText}>{transaction.name}</Text>
                    <Text style={styles.dateText}>{transaction.date}</Text>
                </View>

                <View style={styles.passContainer}>
                    <Text style={styles.passused}>- {transaction.numberOfPassUsed} pass</Text>
                </View>
            </View>
        );

    } 
    else if (transaction.type == "Recharge") {
        return (
            <View style={styles.transactionContainer}>
                <Image style={styles.metroLogo} source={require('../assets/purchase.png')} />
                
                <View style={styles.textContainer}>
                    <Text style={styles.typeText}>{transaction.name}</Text>
                    <Text style={styles.dateText}>{transaction.date}</Text>
                </View>
    
                <View style={styles.passContainer}>
                    <Text style={styles.passused}>+ {transaction.numberOfPassAdded} pass</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    transactionContainer: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 10,
    },
    textContainer: {
        flexDirection: 'column',
    },
    typeText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    dateText: {
        fontSize: 14,
    },
    metroLogo: {
      width: 50,
      height: 50,
      marginRight: 15,
    },
    passContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    passused: {
        fontSize: 15,
    }
  
  });
