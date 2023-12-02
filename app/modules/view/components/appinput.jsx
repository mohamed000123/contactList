import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const AppInput = ({updateInputval, name, value, secure}) => {
  const [focused, setFocused] = useState(false);

  const changeValue = e => {
    updateInputval(e, name);
  };

  return (
    <>
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChangeText={e => changeValue(e)}
        value={value}
        placeholderTextColor={'#626262'}
        placeholder={name.toUpperCase()}
        secureTextEntry={secure ? secure : false}
        style={[styles.input, focused && styles.focusedInput]}
      />
    </>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    padding: 20,
    backgroundColor: '#f1f4ff',
    borderRadius: 10,
    marginVertical: 10,
    borderColor: '#c2c2c2',
    borderWidth: 3,
  },
  focusedInput: {
    borderColor: '#f6880e',
    borderWidth: 3,
    shadowColor: '#fdcc2d',
    shadowOffset: {width: 4, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
