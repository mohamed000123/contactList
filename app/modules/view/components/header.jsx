import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Dimensions} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const HeaderSection = ({contacts, setSearchResult}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = text => {
    setSearchQuery(text);
    const filteredData = contacts.filter(contact => {
      return contact.displayName?.toLowerCase().includes(text.toLowerCase());
    });
    setSearchResult(filteredData);
  };
  return (
    <View style={styles.header}>
      {/* SEARCH BAR */}
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search....."
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor="rgba(250,250,250,0.4)"
        />
      </View>
      {/* SELECTED CONTACTS */}
      <View style={styles.selectedContainer}></View>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'gray',
    flex: 1,
    alignItems: 'center',
  },
  searchBarContainer: {
    marginTop: 20,
    height: 40,
    width: '90%',
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    color: 'white',
    fontSize: WINDOW_WIDTH / 25,
    backgroundColor: 'rgba(63, 58, 64, 0.252)',
    borderRadius: 10,
  },
  selectedContainer: {
    flex: 3,
    width: '100%',
    backgroundColor: 'rgba(35,31,36,1)',
  },
});
