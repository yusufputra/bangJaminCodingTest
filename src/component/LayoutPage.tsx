import React, {ReactNode} from 'react';
import {MyStatusBar, MyStatusBarProps} from './MyStatusBar';
import {SafeAreaView, StyleProp, ViewStyle} from 'react-native';

export const LayoutPage = ({
  children,
  style,
  statusBarStyle,
  enableSafeArea = true,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  statusBarStyle?: MyStatusBarProps;
  enableSafeArea?: boolean;
}) => {
  return (
    <>
      <MyStatusBar {...statusBarStyle} />
      {enableSafeArea ? (
        <SafeAreaView style={style}>{children}</SafeAreaView>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
