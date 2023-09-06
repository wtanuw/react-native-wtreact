import React from 'react';
import {Text, StyleSheet} from 'react-native';

const WTText = props => {
  const {text, style, defaultStyle = false} = props;
  return (
    <Text style={{...(defaultStyle ?? styles.text), ...style}}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#111825',
    fontSize: 18,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
});

export default WTText;
export {WTText};
