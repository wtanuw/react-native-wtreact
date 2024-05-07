import React, { useRef, useEffect } from 'react';
import { Text, View, Animated } from 'react-native';
import ReAnimated, { FadeOut } from "react-native-reanimated";
import {
  FlipInXUp,
  FlipOutXDown,
  SlideInDown,
  SlideOutUp,
  SlideInUp,
  FadeIn,
} from "react-native-reanimated";
import { Easing, withTiming } from 'react-native-reanimated';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        useNativeDriver: false,
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export const ee = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    </View>
  )
}

const Fa2 = (props) => {
  // const [fadeAnim2] = React.useState(new Animated.Value(0));
  // const fadeAnim = useRef(new ReAnimated.Value(0)).current  // Initial value for opacity: 0

  // useEffect(() => {
  //   ReAnimated.timing(
  //     fadeAnim,
  //     {
  //       toValue: 1,
  //       duration: 10000,
  //     }
  //   ).start();
  // }, [fadeAnim])

  return (
    <ReAnimated.View                 // Special animatable View
      style={{
        ...props.style,
        // opacity: fadeAnim,         // Bind opacity to animated value
      }}
      entering={FadeIn.easing(Easing.linear)}
      exiting={FadeOut.easing(Easing.linear)}
      // entering={SlideInUp}
      // exiting={FlipOutXDown.springify()}
    >
      {props.children}
    </ReAnimated.View>
  );
}


const FaSlide = (props) => {
  // const [fadeAnim2] = React.useState(new Animated.Value(0));
  // const fadeAnim = useRef(new ReAnimated.Value(0)).current  // Initial value for opacity: 0

  // useEffect(() => {
  //   ReAnimated.timing(
  //     fadeAnim,
  //     {
  //       toValue: 1,
  //       duration: 10000,
  //     }
  //   ).start();
  // }, [fadeAnim])

  return (
    <ReAnimated.View                 // Special animatable View
      style={{
        ...props.style,
        // opacity: fadeAnim,         // Bind opacity to animated value
      }}
      layout={SlideInDown}
      // entering={SlideInDown.easing(Easing.linear)}
      // exiting={SlideInDown.easing(Easing.linear)}
      // entering={SlideInUp}
      // exiting={FlipOutXDown.springify()}
    >
      {props.children}
    </ReAnimated.View>
  );
}


export default Fa2
export {Fa2}
export {FaSlide}