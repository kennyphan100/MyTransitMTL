import React, {useState} from 'react';
import { StyleSheet, View, Image, SafeAreaView, Text, useWindowDimensions, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ReadOPUSCard() {
    const navigation = useNavigation();
    const {height, width} = useWindowDimensions();
    const [scanSuccessful, setscanSuccessful] = useState(false);

    const onContinuePressed = () => {
        navigation.navigate('Dashboard')
    }

    return (
        <SafeAreaView style={styles.container}>
            
            { scanSuccessful ? 
                <>
                    <Text style={styles.text}>Scan Successful</Text>
                    <Image style={[styles.myTransitMTLLogo ]} source={require('../assets/checkmark.png')} />
                    <Button style={styles.button} color='#65A0C2' title='Continue' onPress={onContinuePressed} />
                </>
                :
                <View>
                    <Text style={styles.text}>Tap your OPUS card with your phone</Text>
                    <Image style={[styles.myTransitMTLLogo, {height: height * 0.3}, {width: width * 0.7} ]} source={require('../assets/nfc_scan.png')} />
                    <Button style={styles.button} color='#65C271' title='Continue' onPress={() => setscanSuccessful(true)} />
                </View>
            }


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 16,
    },
    myTransitMTLLogo: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
})
