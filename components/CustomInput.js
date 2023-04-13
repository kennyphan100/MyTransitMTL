import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Controller } from 'react-hook-form';

export default function CustomInput ({ control, name, rules = {}, placeholder, secureTextEntry, icon }) {
    return (
        
            <Controller 
                control={control}
                name={name}
                rules={rules}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                    <>
                        <View style={[styles.container, {}]}>
                            <Text style={styles.icon}>{icon}</Text>
                            <TextInput 
                                value={value} 
                                onChangeText={onChange} 
                                onBlue={onBlur} 
                                placeholder={placeholder}
                                style={[styles.input, {borderColor: error ? 'red' : 'transparent'}]}
                                secureTextEntry={secureTextEntry}
                            />
                        </View>
                        {error && (
                                <Text style={{color: 'red', alignSelf: 'center'}}>{error.message || 'Error'}</Text>
                        )}
                    </>

                )}
            />
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        width: '50%',
        height: '120%',
        fontWeight: 'bold',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        paddingLeft: 5,
        borderWidth: 1,
    },
    icon: {
        marginTop: 5,
        marginRight: 5
    },
})