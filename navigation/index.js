import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Feather, AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Dashboard from '../screens/Dashboard';
import Recharge from '../screens/Recharge';
import CustomerDrawerContent from '../screens/CustomDrawerContent';
import Wallet from '../screens/Wallet';
import AddPaymentMethod from '../screens/AddPaymentMethod';
<<<<<<< HEAD
import Settings from '../screens/Settings';
=======
import AddCard from '../screens/AddCard';
>>>>>>> c710a4301af85ce90677ebf46f0fe5b8e95620db

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
                  <Drawer.Screen name="Dashboard" component={Dashboard} options={{
                        drawerIcon: config => <Feather name="home" size={24} color="black" />,
                        }}
                  />
                  <Drawer.Screen name="Purchase Passes" component={Recharge} options={{
                        drawerIcon: config => <FontAwesome name="ticket" size={24} color="black" />
                        }} 
                  />
                  <Drawer.Screen name="Wallet" component={Wallet} options={{
                        drawerIcon: config => <AntDesign name="wallet" size={24} color="black" />
                        }} 
                  />
                  <Drawer.Screen name="Add Payment Method" component={AddPaymentMethod} options={{
                        drawerItemStyle: { height: 0 }
                        }} 
                  />
                  <Drawer.Screen name="Settings" component={Settings} options={{
                        drawerIcon: config => <Feather name="settings" size={24} color="black" />
                        }} 
                  />                  
                  <Drawer.Screen name="Add Card" component={AddCard} options={{
                        drawerItemStyle: { height: 0 }
                        }} 
                  />
                </Drawer.Navigator>
              )}
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
