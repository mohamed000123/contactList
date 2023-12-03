import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ContactItem from '../components/contactItem';
import {useSelector, useDispatch} from 'react-redux';
import {getContacts} from '../../Redux/action_creators';
const ContactList = () => {
  const contacts = useSelector(state => state.contactsReducer.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    getContacts()(dispatch);
  }, []);
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
