import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import TransactionMetro from './TransactionMetro';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AntDesign  } from '@expo/vector-icons';
import { auth } from '../firebaseConfig';

export default function Dashboard() {
    const navigation = useNavigation();
    const user = auth.currentUser;

    const [OPUSCard, setOPUSCard] = useState();

    const onAddOPUSPressed = () => {
        setOPUSCard(
            { name: 'Joe User', 
              transactions: [
                                { type: 'Metro', name: 'Snowdon', date:'2023-01-05 16:33', numberOfPassUsed: 1, numberOfPassAdded: 0},
                                { type: 'Bus', name: '102 O', date:'2023-01-01 13:07', numberOfPassUsed: 1, numberOfPassAdded: 0},
                                { type: 'Bus', name: '420 E', date:'2022-12-21 19:14', numberOfPassUsed: 1, numberOfPassAdded: 0},
                                { type: 'Recharge', name: 'Recharge ($29.99)', date:'2022-12-17 15:45', numberOfPassUsed: 0, numberOfPassAdded: 5},
                                { type: 'Metro', name: 'Vendome', date:'2022-11-13 14:54', numberOfPassUsed: 1, numberOfPassAdded: 5},
                            ]
            }
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            
            {/* <View style={styles.header}>
                <Header title="Dashboard"/>
            </View> */}

            {OPUSCard ? 
                <View style={styles.myOpusCardContainer}>
                    <Image style={styles.OPUSCard} source={require('../assets/OPUSCard.png')} />
    
                    <View style={styles.viewTextStyle}>
                        <Text style={styles.textStyle}>{OPUSCard.name}</Text>
                    </View>
    
                    <TouchableOpacity style={styles.addPassesStyle} onPress={() => navigation.navigate('Purchase Passes')}>
                        <AntDesign name="pluscircle" size={36} color='#65C271' />
                    </TouchableOpacity>
                </View>
            : 
                <View style={styles.myOpusCardContainerNoOPUS}>
                    <Text style={styles.myOpusCardText}>No OPUS Card Registered</Text>

                    <View style={styles.myopuscardbuttons}>
                        <View style={styles.buttonContainer}>
                            <Button color='#65C271' title='Add' onPress={onAddOPUSPressed}/>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button color='#65A0C2' title='Apply' />
                        </View>
                    </View>
                </View>
            }

            <View style={styles.mytransactionsContainer}>
                <Text style={styles.mytransactionsTitle}>My Transactions</Text>
                {OPUSCard ?
                    <FlatList
                        data={OPUSCard.transactions}
                        renderItem={({ item, index }) => {
                            return <TransactionMetro transaction={item} />
                        }}
                    /> 
                :
                    <></>
                }
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
        borderTopWidth: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    myOpusCardContainer: {
        flex: 1,
        width: '80%',
        margin: 10,
    },
    OPUSCard: {
        width: '100%',
        height: '100%',
    },
    viewTextStyle: {
        position: 'absolute',
        bottom: 0,
        marginLeft: 15,
        marginBottom: 25,
    },
    addPassesStyle: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: 15,
        marginBottom: 15,
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
    },
    myOpusCardContainerNoOPUS: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        margin: 10,
        padding: 20,
        borderRadius: 20,
        width: '80%',
    },
    myOpusCardText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
    },
    myopuscardbuttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    mytransactionsContainer: {
        flex: 2.5,
        backgroundColor: '#D9D9D9',
        margin: 10,
        width: '80%',
        borderRadius: 20,
        padding: 10,
    },
    mytransactionsTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
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
    buttonContainer: {
        margin: 10,
        borderRadius: 5,
        overflow: 'hidden',
    },
})
