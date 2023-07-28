/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../utils/colors';
import {ProductItem, ProductItemProps} from './ProductItem';

type ProductContainerProps = {
  title: string;
  description: string;
  items: Array<ProductItemProps>;
};

export const ProductContainer = (props: ProductContainerProps) => {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <View>
        <Text
          style={{
            color: colors.black,
            fontWeight: '700',
            fontSize: 14,
          }}>
          {props.title}
        </Text>
        <Text
          style={{
            color: colors.grey['60'],
            fontWeight: '600',
            fontSize: 12,
          }}>
          {props.description}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 8,
        }}>
        {props.items.map((item, index) => {
          return <ProductItem key={index} {...item} />;
        })}
      </View>
    </View>
  );
};
