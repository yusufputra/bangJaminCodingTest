import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {colors} from '../../utils/colors';

export const Button = (props: {
  variant?: 'primary' | 'secondary';
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableHighlight
      style={{
        ...styles.container,
        ...buttonVariant[props.variant ? props.variant : 'primary'],
      }}
      underlayColor="#fff"
      onPress={props.onPress}>
      <Text
        style={{
          ...styles.buttonStyle,
          color: props.variant
            ? buttonVariant[props.variant].color
            : buttonVariant.primary.color,
        }}>
        {props.title}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    padding: 8,
    borderRadius: 16,
  },
  buttonStyle: {
    height: 30,
    textAlign: 'center',
    lineHeight: 30,
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
