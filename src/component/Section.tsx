import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils/colors';

type SectionProps = PropsWithChildren<{
  title: string;
  textColor?: string;
}>;

export function Section({
  children,
  title,
  textColor,
}: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: textColor || colors.white,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: textColor || colors.white,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
});
