import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ContactItem from '../components/contactItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavouriteContacts = () => {
  const [favContacts, setFavContacts] = useState([]);
  useEffect(() => {
    (async () => {
      let jsonData = await AsyncStorage.getItem('favContacts');
      if (jsonData) {
        let parsedData = await JSON.parse(jsonData);
        setFavContacts(parsedData);
      }
    })();
  }, [setFavContacts]);
  const renderItem = ({item}) => {
    return <ContactItem favContact={true} item={item} />;
  };
  return (
    <View style={styles.contactsContainer}>
      <FlatList
        data={favContacts}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.recordID}
      />
    </View>
  );
};

export default FavouriteContacts;
const styles = StyleSheet.create({
  contactsContainer: {
    backgroundColor: 'rgba(35,31,36,1)',
    flex: 1,
  },
});
