import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Alert,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';

const App = () => {
  const backgroundImage = require('./asset/Background.jpg');
  const logoImage = require('./asset/anh.jpg');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    Alert.alert(
      `Đăng nhập thành công với Username: ${email} và Password: ${password}`,
    );
  };

  return (
    <View style={styles.container}>
      {/* Background */}
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.inputContainer}>
          {/* Anh */}
          <Image source={logoImage} style={styles.logo} />

          {/* Quen_mat_khau */}
          <Text style={styles.textRegister}>Register</Text>

          {/* Dang_nhap */}
          <TextInput
            style={styles.textInput}
            onChangeText={setEmail}
            value={email}
            placeholder="Username"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />

          {/* Nut_login */}
          <TouchableHighlight style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 280,
    marginBottom: 10,
  },
  textRegister: {
    marginLeft: 270,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'blue',
    marginVertical: 5,
    width: 350,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'aqua',
    height: 50,
    width: 350,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'blue',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default App;
