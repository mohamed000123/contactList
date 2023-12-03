import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

const SelectedItem = ({item, deselectContact}) => {
  return (
    <View style={styles.selectedItemContainer}>
      <Image
        source={require('../../../assets/images/profile.jpg')}
        style={styles.contactImage}
      />
      <View style={{height: '5%'}} />
      <Text style={styles.contactName} numberOfLines={1}>
        {item.displayName}
      </Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => deselectContact(item.recordID)}>
        <Text style={{color: 'white', fontSize: 15}}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectedItem;

const styles = StyleSheet.create({
  selectedItemContainer: {
    width: WINDOW_WIDTH / 5,
    height: '100%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactImage: {
    width: WINDOW_WIDTH / 6.5,
    height: WINDOW_WIDTH / 6.5,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  contactName: {
    color: 'white',
    fontSize: WINDOW_WIDTH / 35,
    fontWeight: '400',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: '11%',
    top: '11%',
    backgroundColor: 'grey',
    borderRadius: WINDOW_WIDTH / 5,
    width: WINDOW_WIDTH / 18,
    height: WINDOW_WIDTH / 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
