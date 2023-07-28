/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {LayoutPage} from '../component/LayoutPage';
import {colors} from '../utils/colors';
import {Heading} from '../component/common/Heading';
import {Button} from '../component/common/Button';
import {InputText} from '../component/common/InputText';

export const Login = () => {
  const [email, setEmail] = useState('');
  return (
    <LayoutPage
      statusBarStyle={{...styles.layout, barStyle: 'dark-content'}}
      enableSafeArea={false}>
      <View style={{backgroundColor: colors.white, height: '100%'}}>
        <Image
          source={require('../assets/image/login-header.png')}
          style={styles.image}
        />
        <View style={styles.container}>
          <Image
            source={require('../assets/image/logo.png')}
            style={styles.logo}
          />
          <Heading title="Login via email" />
        </View>
        <InputText
          placeholder="tony@bangjamin.com"
          onChangeText={e => {
            setEmail(e.nativeEvent.text);
          }}
          value={email}
        />
        <Button
          title="Contiinue"
          variant="primary"
          onPress={() => console.log('halo')}
        />
        <View style={{...styles.container, marginTop: 8}}>
          <Text style={{color: colors.black}}>
            By clicking continue, you agree to our{' '}
            <Text style={styles.highlight}>Terms of Use</Text> and acknowledge
            that you have read our{' '}
            <Text style={styles.highlight}>Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </LayoutPage>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: Platform.OS === 'android' ? colors.white : 'transparent',
  },
  image: {
    height: Dimensions.get('screen').height > 700 ? '62%' : '55%',
    resizeMode: 'cover',
    width: '100%',
  },
  logo: {
    width: 100,
    resizeMode: 'contain',
  },
  container: {paddingHorizontal: 16},
  highlight: {color: colors.orange.primary},
});
