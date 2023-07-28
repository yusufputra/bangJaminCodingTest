/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {colors} from '../../utils/colors';
import {DeviderHorizontal} from '../common/DeviderHorizontal';

type NasabahItemProps = {
  imageUrl: string;
  name: string;
  email: string;
};

export const NasabahItem = (props: NasabahItemProps) => {
  return (
    <View style={{gap: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 16,
        }}>
        <Image source={{uri: props.imageUrl}} />
        <View>
          <Text
            style={{
              color: colors.black,
              fontWeight: '500',
              fontSize: 14,
            }}>
            {props.name}
          </Text>
          <Text
            style={{
              color: colors.black,
              fontWeight: '800',
              fontSize: 14,
            }}>
            {props.email}
          </Text>
        </View>
      </View>
      <DeviderHorizontal />
    </View>
  );
};
