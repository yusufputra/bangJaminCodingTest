import React from 'react';
import {Button as RNButton, ButtonProps, View, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const Button = (props: ButtonProps) => {
  return (
    <View style={styles.container}>
      <RNButton {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    padding: 8,
    borderRadius: 16,
  },
});
