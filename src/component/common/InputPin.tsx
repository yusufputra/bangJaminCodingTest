import React, {useState, createRef, FunctionComponent} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

interface InputPinProps {
  handleCompletePin: (pin: string) => void;
}

const InputPin: FunctionComponent<InputPinProps> = ({handleCompletePin}) => {
  const [pin, setPin] = useState<string[]>(Array(6).fill(''));
  const [focusedInputIndex, setFocusedInputIndex] = useState<number | null>();
  const pinInputRefs = Array(6)
    .fill(0)
    .map(() => createRef<TextInput>());

  const handlePinChange = (digit: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = digit;
    setPin(newPin);

    if (digit !== '') {
      if (index < pinInputRefs.length - 1) {
        pinInputRefs[index + 1].current?.focus();
        handleCompletePin('');
      }
      if (index === pinInputRefs.length - 1) {
        handleCompletePin(newPin.join(''));
      }
    } else {
      if (index > 0) {
        pinInputRefs[index - 1].current?.focus();
        handleCompletePin('');
      }
    }
  };

  return (
    <View style={styles.container}>
      {pin.map((digit, index) => (
        <TextInput
          key={`pin-input-${index}`}
          ref={pinInputRefs[index]}
          style={[
            styles.input,
            index === focusedInputIndex ? styles.focused : {},
          ]}
          keyboardType="numeric"
          secureTextEntry
          value={digit}
          maxLength={1}
          onChangeText={digital => handlePinChange(digital, index)}
          onFocus={() => setFocusedInputIndex(index)}
        />
      ))}
    </View>
  );
};

export default InputPin;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 8,
    color: 'black',
  },
  focused: {
    borderColor: colors.orange.primary,
  },
});
