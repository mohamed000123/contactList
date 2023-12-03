import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const ContactItem = ({item, selectContact, isFavContact, preFavContacts}) => {
  return (
    <View style={styles.contactItemContainer}>
      <Image
        source={require('../../../assets/images/profile.jpg')}
        style={styles.contactImage}
      />
      <View style={styles.contactData}>
        <Text style={styles.contactName}>{item.displayName}</Text>
      </View>
      {!isFavContact && (
        <TouchableOpacity
          style={styles.checkMark}
          onPress={() => {
            selectContact(item.recordID);
          }}></TouchableOpacity>
      )}
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  contactItemContainer: {
    height: WINDOW_HEIGHT / 12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  contactImage: {
    height: WINDOW_HEIGHT / 18,
    resizeMode: 'cover',
    width: WINDOW_HEIGHT / 18,
    borderRadius: WINDOW_HEIGHT / 18,
  },
  contactData: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    height: '100%',
    flex: 1,
    marginLeft: '5%',
    justifyContent: 'center',
  },
  contactName: {
    color: 'white',
    fontSize: WINDOW_WIDTH / 21,
    fontWeight: '500',
    textAlign: 'left',
    writingDirection: 'ltr',
  },
  checkMark: {
    position: 'absolute',
    right: '5%',
    alignSelf: 'center',
    height: WINDOW_WIDTH / 15,
    width: WINDOW_WIDTH / 15,
    borderRadius: WINDOW_WIDTH / 15,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
});
