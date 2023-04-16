import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function Map() {

  return (
    <>
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Card reading feature</Text>

            <Text style={styles.text}>
            The feature lets you check the status of fares loaded on your OPUS or non-reloadable smart card using NFC (Near Field Communication) technology. Reading your OPUS card brings up useful information about your transit fares, such as the number of remaining trips on a multi-trip fare, a fare’s start or end time, and more!

            Launch the feature, press the card against your phone, and you’re done!
            </Text>

            <Text style={[styles.title, styles.special]}>What do I need to do before using this feature?</Text>

            <View>
                <Text style={styles.title}>iPhone device owners </Text>
                <Text style={styles.text}>Check if you’re connected to Internet, otherwise it can’t check your card’s content.</Text>
                <Text style={styles.text}>(By default, iPhones have NFC activated)</Text>

                <Text style={[styles.title, styles.marginTop]}>Android device owners </Text>
                <Text style={styles.text}>1. Check if your phone has NFC activated. If not, activate it.</Text>
                <Text style={styles.text}>2. Check if you’re connected to Internet, otherwise it can’t check your card’s content.</Text>
            </View>

            <Text style={[styles.title, styles.special]}>How do I use the feature?</Text>

            <View>
                <Text style={styles.text}>1. Go to the dashboard page by clicking on the menu icon on the top left of the screen</Text>
                <Text style={styles.text}>2. Start reading the card by pressing the "Add" button </Text>
                <Text style={styles.text}>3. Hold your OPUS card against the upper part of your mobile phone. It will vibrate once it connects. </Text>
                <Text style={styles.text}>4. Now, keep your OPUS card still for a few seconds so the app can recognize it. </Text>
                <Text style={styles.text}>5. Check the on-screen description and validity of your available fares. If you scanned an OPUS card, it will also display the card. </Text>
            </View>

        </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopWidth: 1,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#65C271',
    },
    text: {
        textAlign:'justify',
        fontSize: 13,
        color: '#65A0C2'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#65C271',
        
    },
    special: {
        textDecorationLine: 'underline',
        marginTop: 10,
    },
    marginTop: {
        marginTop: 10,
    }
});
