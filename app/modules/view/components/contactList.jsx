import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ContactItem from '../components/contactItem';

const ContactList = ({contacts, setSelectedItems, selectedItems}) => {
  // selecting contact
  const selectContact = itemId => {
    const contact = contacts.filter(contact => {
      return itemId === contact.recordID;
    });
    contact.length ? setSelectedItems([...selectedItems, ...contact]) : null;
  };
  const renderItem = ({item}) => {
    return <ContactItem selectContact={selectContact} item={item} />;
  };
  return (
    <View style={styles.contactsContainer}>
      <FlatList
        data={contacts}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.recordID}
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
