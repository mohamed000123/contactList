import React from 'react';
import {View} from 'react-native';
import ContactList from '../components/contactList';
const Home = ({navigation: {navigate}}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <ContactList />
      </View>
    </>
  );
};

export default Home;
