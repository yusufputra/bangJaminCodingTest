/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {LayoutPage} from '../component/LayoutPage';
import {colors} from '../utils/colors';
import {Image, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {Section} from '../component/Section';
import InputPin from '../component/common/InputPin';
import {Button} from '../component/common/Button';

export const Pin = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'pin'>) => {
  const {email} = route.params;
  const [pin, setPin] = useState('');
  return (
    <LayoutPage
      statusBarStyle={{
        backgroundColor: colors.white,
        barStyle: 'dark-content',
      }}
      style={{backgroundColor: colors.white}}>
      <View style={{backgroundColor: colors.white, height: '100%'}}>
        <Image
          source={require('../assets/image/logo.png')}
          style={styles.logo}
        />
        <View style={{gap: 32}}>
          <Section textColor={colors.black} title="Enter Bang Jamin PIN">
            {email}
          </Section>
          <InputPin handleCompletePin={e => setPin(e)} />
          <Button
            title="Continue"
            variant="primary"
            onPress={() => console.log('Continue', pin)}
          />
        </View>
      </View>
    </LayoutPage>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
