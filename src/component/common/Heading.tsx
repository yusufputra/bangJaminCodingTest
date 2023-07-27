import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../utils/colors';

export const Heading = (props: {title: string}) => {
  return <Text style={styles.heading}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    color: colors.black,
  },
});
