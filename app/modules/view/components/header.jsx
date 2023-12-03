import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import SelectedItem from './selectedItem';
import {Text} from 'react-native';
const WINDOW_WIDTH = Dimensions.get('window').width;
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderSection = ({
  navigation,
  contacts,
  setSearchResult,
  selectedItems,
  setSelectedItems,
}) => {
  // search
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = text => {
    setSearchQuery(text);
    const filteredData = contacts.filter(contact => {
      return contact.displayName?.toLowerCase().includes(text.toLowerCase());
    });
    setSearchResult(filteredData);
  };
  // deselecting contact
  const deselectContact = itemId => {
    const contact = selectedItems.filter(contact => {
      return contact.recordID !== itemId;
    });
    // contact.length ? setSelectedItems([...contact]) : null;
    setSelectedItems([...contact]);
  };
  const renderItem = ({item}) => {
    return <SelectedItem deselectContact={deselectContact} item={item} />;
  };
  // next & cancel btns
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    selectedItems.length > 0 ? setIsVisible(true) : setIsVisible(false);
  }, [selectedItems]);
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
  });
  const handelNext = () => {
    try {
      AsyncStorage.setItem(
        'favContacts',
        JSON.stringify([...preFavContacts, ...selectedItems]),
      ).then(() => {
        setSelectedItems([]);
        navigation.navigate('FavouriteContacts');
      });
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };
  return (
    <View style={styles.headerContainer}>
      {/* navigation header */}
      <View style={styles.header}>
        <Pressable
          style={{
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? 'auto' : 'none',
            ...styles.cancel,
          }}
          onPress={() => {
            setSelectedItems([]);
          }}>
          <Text style={styles.text}>Cancel</Text>
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.text2}>Add Participants</Text>
          <Text style={styles.text3}>
            {selectedItems.length}/{contacts.length}
          </Text>
        </View>
        <Pressable
          style={{
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? 'auto' : 'none',
            ...styles.next,
          }}
          onPress={handelNext}>
          <Text style={styles.text}>Next</Text>
        </Pressable>
      </View>
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
      {selectedItems.length > 0 && (
        <View style={styles.selectedContainer}>
          <FlatList
            data={selectedItems}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item.recordID}
            horizontal
          />
        </View>
      )}
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'gray',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 7,
  },
  cancel: {
    paddingLeft: 15,
  },
  text: {
    fontSize: WINDOW_WIDTH / 21,
    fontWeight: '500',
    color: '#89CFF0',
  },
  text2: {
    fontSize: WINDOW_WIDTH / 21,
    fontWeight: '500',
    color: 'white',
  },
  text3: {
    color: 'white',
  },
  textContainer: {
    alignItems: 'center',
  },
  next: {
    paddingRight: 15,
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
    paddingBottom: 7,
  },
});
