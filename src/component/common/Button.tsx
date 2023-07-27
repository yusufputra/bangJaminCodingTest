import React from 'react';
import {Button as RNButton, ButtonProps, View, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const Button = (
  props: ButtonProps & {variant?: 'primary' | 'secondary'},
) => {
  return (
    <View
      style={{
        ...styles.container,
        ...buttonVariant[props.variant ? props.variant : 'primary'],
      }}>
      <RNButton
        color={
          props.variant
            ? buttonVariant[props.variant].color
            : buttonVariant.primary.color
        }
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    padding: 8,
    borderRadius: 16,
  },
});

const buttonVariant = StyleSheet.create({
  primary: {
    backgroundColor: colors.orange.primary,
    color: colors.white,
  },
  secondary: {
    backgroundColor: colors.white,
    color: colors.orange.primary,
  },
});
