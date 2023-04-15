import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Dashboard from '../screens/Dashboard';
import Recharge from '../screens/Recharge';
import CustomerDrawerContent from '../screens/CustomDrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Dashboard">
              {() => (
                <Drawer.Navigator drawerContent={(props) => <CustomerDrawerContent {...props} />}>
                  <Drawer.Screen name="Dashboard" component={Dashboard} />
                  <Drawer.Screen name="Purchase Passes" component={Recharge} />
                </Drawer.Navigator>
              )}
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
