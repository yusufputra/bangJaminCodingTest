import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import {colors} from '../../utils/colors';

type InputTextProps = {
  value?: string;
  placeholder?: string;
  onChangeText?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

export const InputText = (props: InputTextProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    borderRadius: 8,
    borderColor: colors.grey[30],
    color: colors.black,
  },
});
