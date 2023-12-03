import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ContactItem from '../components/contactItem';

const ContactList = ({contacts}) => {
  return (
    <View style={styles.contactsContainer}>
      <FlatList
        data={contacts}
        showsVerticalScrollIndicator={false}
        renderItem={ContactItem}
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
