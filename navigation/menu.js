import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screens/Dashboard';
import Recharge from '../screens/Recharge';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer independent={true}>
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Recharge" component={Recharge} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

