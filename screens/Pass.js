import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Pass({ pass }) {
    return (
        <View style={styles.passContainer}>            
            <View style={styles.textContainer}>
                <Text style={styles.passText}>{pass.title}</Text>
                <Text style={styles.passText}>{pass.price}</Text>
            </View>

            <View style={styles.quantityContainer}>
                <TouchableOpacity >
                    <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>

                <Text style={styles.nbOfPasses}>{pass.quantity}</Text>

                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    passContainer: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 10,
    },
    textContainer: {
        flexDirection: 'column',
    },
    passText: {
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
    quantityContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    passused: {
        fontSize: 15,
    },
    nbOfPasses: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 17,
    }
  
  });
