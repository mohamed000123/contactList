import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import AppInput from '../components/appinput';
import auth from '@react-native-firebase/auth';
import Alert from '../components/alert';

const Signup = ({navigation}) => {
  const [values, setValues] = useState({email: '', password: ''});

  const updateInputval = (val, key) => {
    const value = {...values};
    value[key] = val;
    setValues({...value});
  };

  const singupSubmit = () => {
    if (!values.email && !values.password) {
      setAlertVisible(true);
      return false;
    }

    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(user => {
        console.log('User Created Successfully!');
        setValues({email: '', password: ''});
        navigation.navigate('Login');
      })
      .catch(error => console.log(error.message));
  };

  const [isAlertVisible, setAlertVisible] = useState(false);
  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <View style={{alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/logo.png')}
            style={{height: 200}}
          />
          <Text style={styles.signupText}>Sign up Here</Text>
        </View>
        <View style={{marginVertical: 30}}>
          <AppInput
            name="email"
            value={values.email}
            updateInputval={updateInputval}
            secure={false}
          />
          <AppInput
            name="password"
            value={values.password}
            updateInputval={updateInputval}
            secure={true}
          />
        </View>

        <TouchableOpacity
          onPress={() => singupSubmit()}
          style={styles.signupBtn}>
          <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
            Sign up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{padding: 20, marginVertical: 30}}>
          <Text style={{color: '#000', textAlign: 'center', fontSize: 20}}>
            Already have an account
          </Text>
        </TouchableOpacity>
      </View>
      <Alert
        visible={isAlertVisible}
        message="This is a custom alert!"
        onClose={closeAlert}
      />
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signupText: {
    fontSize: 30,
    color: '#f6880e',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  signupBtn: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f6880e',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});
