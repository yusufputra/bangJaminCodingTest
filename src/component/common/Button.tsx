import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {colors} from '../../utils/colors';

export const Button = (props: {
  variant?: 'primary' | 'secondary';
  title: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}) => {
  return (
    <TouchableHighlight
      disabled={props.disabled}
      style={{
        ...styles.container,
        ...buttonVariant[props.variant ? props.variant : 'primary'],
      }}
      underlayColor="#fff"
      onPress={props.onPress}>
      <View style={styles.content}>
        {props.isLoading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text
            style={{
              ...styles.buttonStyle,
              color: props.variant
                ? buttonVariant[props.variant].color
                : buttonVariant.primary.color,
            }}>
            {props.title}
          </Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    padding: 8,
    borderRadius: 16,
  },
  buttonStyle: {
    height: 30,
    textAlign: 'center',
    lineHeight: 30,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
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
