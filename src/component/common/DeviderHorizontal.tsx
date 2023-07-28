import React from 'react';
import {View} from 'react-native';
import {colors} from '../../utils/colors';

export const DeviderHorizontal = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: '100%',
        height: 1,
        backgroundColor: colors.grey['30'],
        marginRight: 10,
      }}
    />
  );
};
