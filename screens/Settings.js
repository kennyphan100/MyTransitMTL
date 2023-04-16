import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList, Text, Switch } from 'react-native';
import PaymentMethods from './PaymentMethods';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import AddPaymentMethod from './AddPaymentMethod';

export default function Settings() {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    return (
        <SafeAreaView style={styles.container}>
            
            <Text style={styles.title}>Automatic Renewal</Text>
            <View style={styles.settingsContainer}>
                <View style={styles.option}>
                    <Text style={styles.text}>Enable notifications</Text>
                    <Switch
                        trackColor={{false: 'gray', true: '#65C271'}}
                        thumbColor={isEnabled1 ? 'white' : 'white'}
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
                </View>

                <View style={styles.option}>
                    <Text style={styles.text}>Auto-renew monthly passes</Text>
                    <Switch
                        trackColor={{false: 'gray', true: '#65C271'}}
                        thumbColor={isEnabled2 ? 'white' : 'white'}
                        onValueChange={toggleSwitch2}
                        value={isEnabled2}
                    />
                </View>

                <View style={styles.option}>
                    <Text style={styles.text}>Auto-renew monthly passes</Text>
                    <Switch
                        trackColor={{false: 'gray', true: '#65C271'}}
                        thumbColor={isEnabled3 ? 'white' : 'white'}
                        onValueChange={toggleSwitch3}
                        value={isEnabled3}
                    />
                </View>
            </View>

            <Text style={[styles.title, styles.preferredPayment]}>Preferred Payment </Text>
            <View style={styles.settingsContainer}>
                <View style={styles.option}>
                    <Text style={styles.text}>OPUS passes</Text>
                    <Entypo name="triangle-down" size={24} color="black" />
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
        borderTopWidth: 1,
    },
    title: {
        fontSize: 24,
    },
    preferredPayment: {
        marginTop: 20
    },
    settingsContainer: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 20,
        width: '90%',
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})