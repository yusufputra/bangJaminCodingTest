/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {colors} from '../../utils/colors';

type InviteFriendProps = {
  onPress: () => void;
};

export const InviteFriend = (props: InviteFriendProps) => {
  return (
    <TouchableHighlight onPress={props.onPress} style={{borderRadius: 16}}>
      <View
        style={{
          backgroundColor: colors.grey['20'],
          padding: 18,
          borderRadius: 16,
          width: '100%',
          shadowColor: '#000',
          shadowOpacity: 0.4,
          elevation: 5,
          shadowOffset: {width: 1, height: 2},
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image source={require('../../assets/image/support.png')} />
        <View>
          <Text
            style={{
              color: colors.black,
              fontWeight: '700',
              fontSize: 14,
            }}>
            Yuk Undang Sahabat!
          </Text>
          <Text
            style={{
              color: colors.grey['60'],
              fontWeight: '600',
              fontSize: 12,
            }}>
            Cari cuan bareng sahabat kamu
          </Text>
        </View>
        <Image source={require('../../assets/image/add.png')} />
      </View>
    </TouchableHighlight>
  );
};
