import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons  } from '@expo/vector-icons';
import { signOut } from "firebase/auth";
import { auth } from '../firebaseConfig';

export default function CustomDrawerContent(props) {

    const onLogoutPressed = () => {
        signOut(auth).then(() => {
            props.navigation.navigate('Home');
          }).catch((error) => {
            console.warn("Logout Error" + error);
          });
    }

    return (
      <DrawerContentScrollView {...props}>
        
        <TouchableOpacity style={styles.closeSideBarIcon}>
            <FontAwesome name="close" size={24} color="black" onPress={props.navigation.closeDrawer} />
        </TouchableOpacity>

        <View>
          <Text>Profile</Text>
        </View>

        <TouchableOpacity style={styles.logoutIcon}>
            <MaterialIcons name="logout" size={24} color="black" onPress={onLogoutPressed} />
        </TouchableOpacity>
        
        <DrawerItemList {...props} />
        {/* <DrawerItem label= {"Sign out"} /> */}
      </DrawerContentScrollView>
    );
  }

const styles = StyleSheet.create({
    closeSideBarIcon: {
      alignSelf: 'flex-end',
      margin: 10
        
    },
    logoutIcon: {
      alignSelf: 'flex-end',
      margin: 5,
    },

});