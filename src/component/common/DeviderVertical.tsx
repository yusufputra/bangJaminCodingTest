import React from 'react';
import {View} from 'react-native';
import {colors} from '../../utils/colors';

export const DeviderVertical = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: '100%',
        width: 1,
        backgroundColor: colors.grey['30'],
        marginRight: 10,
      }}
    />
  );
};
