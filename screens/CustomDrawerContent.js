import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons  } from '@expo/vector-icons';
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
        
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.closeSideBarIcon}>
              <FontAwesome name="close" size={24} color="white" onPress={props.navigation.closeDrawer} />
          </TouchableOpacity>

          <View style={styles.profileContainer}>
            <Ionicons style={styles.profileIcon} name="person-circle-outline" size={60} color="white" />

            <View style={styles.smallContainer}>
              <Text style={styles.userName}>Joe User</Text>
              <TouchableOpacity style={styles.logoutIcon}>
                <MaterialIcons name="logout" size={24} color="white" onPress={onLogoutPressed} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />
        {/* <DrawerItem label= {"Sign out"} /> */}

        <View style={styles.logoContainer}>
          <Image style={styles.MyTransitMTLLogo} source={require('../assets/MyTransitMTL.png')} />
        </View>

      </DrawerContentScrollView>
    );
  }

const styles = StyleSheet.create({
    closeSideBarIcon: {
      alignSelf: 'flex-end',
      marginRight: 10
    },
    topContainer: {
      backgroundColor: '#65A0C2',
      paddingTop: 10,
      paddingBottom: 10,
    },
    profileContainer: {
      flex: 1
    },
    smallContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    logoutIcon: {
      alignSelf: 'flex-end',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      margin: 5,
    },
    profileIcon: {
      marginLeft: 5,
    },
    userName: {
      fontSize: 20,
      marginLeft: 10,
      color: 'white'
    },
    logoContainer: {
      marginTop: 300,
      alignItems: 'center',
    },
    MyTransitMTLLogo: {
      width: 200,
      height: 200,
    }

});