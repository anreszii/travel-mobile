import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';
import introStyles from './IntroStyle';

const Preloader: React.FC = () => {
  const animated = useRef(new Animated.Value(0)).current;

  const inputRange = [0, 1];
  const outputRange = ['0deg', '360deg'];
  const rotate = animated.interpolate({ inputRange, outputRange });
  const rotateOpposit = animated.interpolate({
    inputRange,
    outputRange: ['0deg', '-360deg'],
  });

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.timing(animated, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  };

  const transform = [{ rotate }];
  const transform1 = [{ rotate: rotateOpposit }];

  return (
    <View style={introStyles.container}>
      <Animated.View style={[introStyles.item, { transform }]}>
        <Animated.View style={[introStyles.dot, { transform: transform1 }]}>
          <Text style={introStyles.text}>Nomad</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Preloader;
