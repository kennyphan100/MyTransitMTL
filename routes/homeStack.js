import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Dashboard from '../screens/Dashboard';

const screens = {
    Home: {
        screen: Home
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Log in'
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            title: 'Create Account'
        }
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            headerShown: false
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
