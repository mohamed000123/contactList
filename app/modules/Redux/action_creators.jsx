import {get_contacts} from './actionsTypes';
import Contacts from 'react-native-contacts';

export function getContacts() {
  return async dispatch => {
    try {
      const granted = await Contacts.requestPermission();
      if (granted === 'authorized') {
        let contacts = await Contacts.getAll();
        contacts = contacts.map(contact => {
          return {displayName: contact.displayName, recordID: contact.recordID};
        });
        dispatch({
          type: get_contacts,
          payload: contacts,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
}
