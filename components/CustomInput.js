import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, Button, useWindowDimensions, Text } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function CustomInput ({ placeholder, icon, value, setValue }) {
    return (
        <View style={styles.input}>
            <Text style={styles.icon}>{icon}</Text>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.inputText}
                secureTextEntry={placeholder == "Password" || placeholder == "Repeat Password" ? true : false}
                selectionColor={'black'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
    icon: {
        marginTop: 5
    },
})