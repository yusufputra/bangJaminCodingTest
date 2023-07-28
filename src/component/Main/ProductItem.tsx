/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../utils/colors';

export type ProductItemProps = {
  icon: ImageSourcePropType;
  label: string;
  onPress: () => void;
};

export const ProductItem = (item: ProductItemProps) => {
  return (
    <TouchableOpacity onPress={item.onPress}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          padding: 8,
        }}>
        <Image source={item.icon} />
        <Text style={{color: colors.black}}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
};
