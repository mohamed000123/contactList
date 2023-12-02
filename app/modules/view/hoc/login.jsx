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

const Login = ({navigation}) => {
  const [values, setValues] = useState({email: '', password: ''});
  const [isAlertVisible, setAlertVisible] = useState(false);
  const closeAlert = () => {
    setAlertVisible(false);
  };
  const updateInputval = (val, key) => {
    const value = {...values};
    value[key] = val;
    setValues({...value});
  };

  const loginSubmit = () => {
    if (!values.email && !values.password) {
      return false;
    }
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(res => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      })
      .catch(error => {
        setAlertVisible(true);
        console.log(error.message);
      });
  };
  const isButtonDisabled = !values.email || !values.password;
  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <View style={{alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/logo.png')}
            style={{height: 220}}
          />
          <Text style={styles.loginText}>Login Here</Text>
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
          onPress={() => loginSubmit()}
          style={styles.loginBtn}
          disabled={isButtonDisabled}>
          <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
          style={{padding: 20, marginVertical: 30}}>
          <Text style={styles.createText}>Create new account</Text>
        </TouchableOpacity>
      </View>
      <Alert
        visible={isAlertVisible}
        message="invalid credentials!"
        onClose={closeAlert}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginText: {
    fontSize: 30,
    color: '#f6880e',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  loginBtn: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f6880e',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  createText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
  },
});
