import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({title}) {
  return (
    <>
        <View style={styles.leftItem}>
            <MaterialIcons style={styles.menuLogo} name="menu" size={30} color="black" />
        </View>

        <View style={styles.centerItem}>
            <Text style={styles.dashboardText}>{title}</Text>
        </View>

        <View style={styles.rightItem}>
            <MaterialIcons name="notifications" size={30} color="black" />
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    leftItem: {
        flex: 1,
        alignItems: 'flex-start',
    },
    centerItem: {
        flex: 1,
        alignItems: 'center',
    },
    rightItem: {
        flex: 1,
        alignItems: 'flex-end',
    },
    dashboardText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
})