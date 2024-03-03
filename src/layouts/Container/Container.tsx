import { View, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import containerStyles from './ContainerStyle';

interface IContainer {
  children: React.ReactNode;
  safe?: boolean;
  mb?: number;
}

const Container: React.FC<IContainer> = ({
  children,
  safe = false,
  mb = 0,
}) => {
  return (
    <>
      {safe ? (
        <SafeAreaView
          style={{
            ...containerStyles.container,
            marginBottom: mb,
          }}>
          {children}
        </SafeAreaView>
      ) : (
        <View
          style={{
            ...containerStyles.container,
            marginBottom: mb,
          }}>
          {children}
        </View>
      )}
    </>
  );
};

export default Container;
