/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {LayoutPage} from '../component/LayoutPage';
import {colors} from '../utils/colors';
import {View} from 'react-native';
import {HeaderNavigation} from '../component/HeaderNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {NasabahItem} from '../component/Nasabah/NasabahItem';

export const Nasabah = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'nasabah'>) => {
  return (
    <LayoutPage
      statusBarStyle={{
        backgroundColor: colors.white,
        barStyle: 'dark-content',
      }}
      style={{backgroundColor: colors.white}}>
      <HeaderNavigation
        title="Nasabah"
        onBackPress={() => navigation.goBack()}
      />
      <View
        style={{backgroundColor: colors.white, height: '100%', padding: 16}}>
        <NasabahItem />
      </View>
    </LayoutPage>
  );
};
