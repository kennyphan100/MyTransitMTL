import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, Button} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Signup() {
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Image style={styles.myTransitMTLLogo} source={require('../assets/MyTransitMTL.png')} />

                <View style={styles.input}>
                    <FontAwesome name="user" size={24} color="black" />
                    <TextInput 
                        style={styles.inputText}
                        placeholder='First Name'
                        selectionColor={'black'}
                    />    
                </View>

                <View style={styles.input}>
                    <FontAwesome name="user" size={24} color="black" />
                    <TextInput 
                        style={styles.inputText}
                        placeholder='Last Name'
                        selectionColor={'black'}
                    />    
                </View>

                <View style={styles.input}>
                    <MaterialIcons name="email" size={24} color="black" />
                    <TextInput 
                        style={styles.inputText}
                        placeholder='Email'
                        selectionColor={'black'}
                    />    
                </View>

                <View style={styles.input}>
                    <MaterialIcons name="vpn-key" size={24} color="black" />
                    <TextInput 
                        style={styles.inputText}
                        placeholder='Password'
                        secureTextEntry={true}
                        selectionColor={'black'}
                    />    
                </View>

                <View style={styles.input}>
                    <MaterialIcons name="vpn-key" size={24} color="black" />
                    <TextInput 
                        style={styles.inputText}
                        placeholder='Confirm Password'
                        secureTextEntry={true}
                        selectionColor={'black'}
                    />    
                </View>

                <View style={styles.buttonContainer}>
                    <Button color='#65A0C2' title='Create account' />
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
        justifyContent: 'center',
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
    myTransitMTLLogo: {
        width: 300,
        height: 300,
    },
    buttonContainer: {
        margin: 10,
        borderRadius: 5,
        overflow: 'hidden',
    },
})
