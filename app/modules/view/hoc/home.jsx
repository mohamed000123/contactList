import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import ContactList from '../components/contactList';
import HeaderSection from '../components/header';
import {useSelector, useDispatch} from 'react-redux';
import {getContacts} from '../../Redux/action_creators';
const Home = ({navigation: {navigate}}) => {
  const contacts = useSelector(state => state.contactsReducer.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    getContacts()(dispatch);
  }, []);
  const [searchResult, setSearchResult] = useState(null);
  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 1.5}}>
          <HeaderSection
            contacts={contacts}
            setSearchResult={setSearchResult}
          />
        </View>
        <View style={{flex: 5}}>
          <ContactList contacts={searchResult ? searchResult : contacts} />
        </View>
      </View>
    </>
  );
};

export default Home;
