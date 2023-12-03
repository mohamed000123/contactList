import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ContactItem from '../components/contactItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Alert from './alert';
const ContactList = ({contacts, setSelectedItems, selectedItems}) => {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const closeAlert = () => {
    setAlertVisible(false);
  };
  // selecting contact
  // getting previous fav contacts
  const [preFavContacts, setPreFavContacts] = useState([]);
  useEffect(() => {
    (async () => {
      let jsonData = await AsyncStorage.getItem('favContacts');
      if (jsonData) {
        let parsedData = await JSON.parse(jsonData);
        setPreFavContacts(parsedData);
      }
    })();
  }, [preFavContacts]);
  const selectContact = itemId => {
    const allreadyFavContacts = [...preFavContacts, ...selectedItems];
    const exists = allreadyFavContacts.some(
      contact => contact.recordID === itemId,
    );
    if (!exists) {
      const contact = contacts.filter(contact => {
        return itemId === contact.recordID;
      });
      contact.length ? setSelectedItems([...selectedItems, ...contact]) : null;
    } else {
      setAlertVisible(true);
    }
  };
  const renderItem = ({item}) => {
    return (
      <ContactItem
        selectContact={selectContact}
        item={item}
        preFavContacts={preFavContacts}
      />
    );
  };
  return (
    <View style={styles.contactsContainer}>
      <FlatList
        data={contacts}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.recordID}
      />
      <Alert
        visible={isAlertVisible}
        message="allready choosen"
        onClose={closeAlert}
      />
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  contactsContainer: {
    backgroundColor: 'rgba(35,31,36,1)',
    flex: 1,
  },
});
