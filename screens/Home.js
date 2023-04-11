import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';

export default function Home({ navigation }) {

    const pressLoginHandler = () => {
        navigation.navigate('Login')
    }

    const pressCreateAccountHandler = () => {
        navigation.navigate('Signup')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.myTransitMTLLogo} source={require('../assets/MyTransitMTL.png')} />

            <View style={styles.buttonContainer}>
                <Button color='#65C271' title='Log In' onPress={pressLoginHandler} />
            </View>

            <View style={styles.buttonContainer}>
                <Button color='#65A0C2' title='Create account' onPress={pressCreateAccountHandler} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      margin: 10,
      borderRadius: 5,
      overflow: 'hidden',
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 6,
      margin: 10,
      width: 200,
    },
    myTransitMTLLogo: {
      width: 300,
      height: 300,
    }
  
  });
