import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import ContactList from '../components/contactList';
import HeaderSection from '../components/header';
import {useSelector, useDispatch} from 'react-redux';
import {getContacts} from '../../Redux/action_creators';
const Home = ({navigation}) => {
  const contacts = useSelector(state => state.contactsReducer.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    getContacts()(dispatch);
  }, []);
  const [searchResult, setSearchResult] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: selectedItems.length > 0 ? 2 : 1,
          }}>
          <HeaderSection
            navigation={navigation}
            contacts={contacts}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            setSearchResult={setSearchResult}
          />
        </View>
        <View style={{flex: 5}}>
          <ContactList
            contacts={searchResult ? searchResult : contacts}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </View>
      </View>
    </>
  );
};

export default Home;
