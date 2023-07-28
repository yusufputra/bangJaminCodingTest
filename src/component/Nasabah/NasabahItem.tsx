/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {colors} from '../../utils/colors';
import {DeviderHorizontal} from '../common/DeviderHorizontal';
import {Customer} from '../../domain/customer/getCustomerHooks';

type NasabahItemProps = Customer;

export const NasabahItem = (props: NasabahItemProps) => {
  return (
    <View style={{gap: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 16,
          paddingTop: 16,
        }}>
        <Image
          style={{height: 50, width: 50, borderRadius: 9999}}
          source={{uri: props.avatar}}
        />
        <View>
          <Text
            style={{
              color: colors.black,
              fontWeight: '500',
              fontSize: 14,
            }}>
            {`${props.first_name} ${props.last_name}`}
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
