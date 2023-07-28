/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Heading} from './common/Heading';

type HeaderNavigationProps = {
  onBackPress?: () => void;
  title: string;
};

export const HeaderNavigation = (props: HeaderNavigationProps) => {
  return (
    <View
      style={{
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
      }}>
      <TouchableOpacity onPress={props.onBackPress}>
        <Image source={require('../assets/image/arrowLeft.png')} />
      </TouchableOpacity>
      <Heading title={props.title} />
    </View>
  );
};
