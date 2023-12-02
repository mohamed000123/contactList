import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import ContactItem from '../components/contactItem';
import Contacts from 'react-native-contacts';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const getContacts = () => {
    Contacts.requestPermission()
      .then(granted => {
        if (granted === 'authorized') {
          Contacts.getAll()
            .then(contacts => {
              setContacts(contacts);
            })
            .catch(err => {
              console.error(err);
            });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.contactsContainer}>
        <FlatList
          style={{flex: 1}}
          data={contacts}
          showsVerticalScrollIndicator={false}
          renderItem={ContactItem}
        />
      </View>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(35,31,36,1)',
  },

  contactsContainer: {
    width: '100%',
    flex: 1,
  },
});
