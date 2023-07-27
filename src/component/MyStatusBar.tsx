import React, {useState} from 'react';
import {
  NativeModules,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../utils/colors';

const {StatusBarManager} = NativeModules;

export type MyStatusBarProps = {
  backgroundColor?: string;
  barStyle?: 'light-content' | 'dark-content';
};

export const MyStatusBar = ({
  backgroundColor = colors.orange.primary,
  barStyle = 'light-content',
}: MyStatusBarProps) => {
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  if (Platform.OS === 'ios') {
    StatusBarManager.getHeight((statusBar: {height: number}) => {
      setStatusBarHeight(statusBar.height + 5);
    });
  }
  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      <View
        style={{
          ...style.appBar,
          height: statusBarHeight,
          backgroundColor: backgroundColor,
        }}
      />
    </>
  );
};

const style = StyleSheet.create({
  appBar: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
});
