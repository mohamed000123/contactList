import {createStackNavigator} from '@react-navigation/stack';
import ContactList from './components/contactList';
import Home from './hoc/home';
import FavouriteContacts from './hoc/favouriteContacts';
const Stack = createStackNavigator();

export default function ContactStack() {
  return (
    <Stack.Navigator>
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
      <Stack.Screen name="ContactList" component={ContactList} />
    </Stack.Navigator>
  );
}
