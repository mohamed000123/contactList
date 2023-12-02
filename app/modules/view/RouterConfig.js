import {createStackNavigator} from '@react-navigation/stack';
import Signup from './hoc/signup';
import Login from './hoc/login';
import Home from './hoc/home';
import FavouriteContacts from './hoc/favouriteContacts';
const Stack = createStackNavigator();

export default function ContactStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="FavouriteContacts"
        component={FavouriteContacts}
        options={() => ({
          title: 'fav contacts',
        })}
      />
    </Stack.Navigator>
  );
}
