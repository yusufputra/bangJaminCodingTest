import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {colors} from '../../utils/colors';

export const MainMenuItem = (props: {
  label: string;
  icon: ImageSourcePropType;
}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{gap: 10, width: '33%'}}>
      <Image source={props.icon} />
      <Text style={{color: colors.black}}>{props.label}</Text>
    </View>
  );
};
