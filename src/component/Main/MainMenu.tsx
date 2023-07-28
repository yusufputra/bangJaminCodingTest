/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {DeviderVertical} from '../common/DeviderVertical';
import {MainMenuItem} from './MainMenuItem';
import {colors} from '../../utils/colors';

const menuData = [
  {
    image: require('../../assets/image/pocket.png'),
    label: 'IDR 0 Jt',
  },
  {
    image: require('../../assets/image/poin.png'),
    label: '0 Poin',
  },
  {
    image: require('../../assets/image/people.png'),
    label: '0 Sahabat',
  },
];

export const MainMenu = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        padding: 18,
        borderRadius: 16,
        width: '100%',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        elevation: 5,
        shadowOffset: {width: 1, height: 2},
        display: 'flex',
        flexDirection: 'row',
      }}>
      {menuData.map((item, index) => {
        return (
          <>
            {index !== 0 && <DeviderVertical />}
            <MainMenuItem icon={item.image} label={item.label} />
          </>
        );
      })}
    </View>
  );
};
