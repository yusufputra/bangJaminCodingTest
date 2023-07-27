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

type MyStatusBarProps = {
  backgroundColor?: string;
};

export const MyStatusBar = ({
  backgroundColor = colors.orange.primary,
}: MyStatusBarProps) => {
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  if (Platform.OS === 'ios') {
    StatusBarManager.getHeight((statusBar: {height: number}) => {
      setStatusBarHeight(statusBar.height + 5);
    });
  }
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={backgroundColor} />
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
