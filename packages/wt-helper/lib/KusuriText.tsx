import React from 'react';
import {Text, StyleSheet, StyleSheetProperties, TextProps, TextStyle} from 'react-native';
import R from 'app/resource/R'
import type {LayoutRectangle} from 'react-native';

interface Props extends TextProps {
  text?: string,
  style?: TextStyle,
  defaultStyle?: boolean,
}

const KusuriText = (props:Props) => {
  const {text, style, defaultStyle = true} = props;
  return (
    <Text {...props} style={{...(defaultStyle && styles.text), ...style}}>{text}</Text>
  );
};

const useAdaptiveFontSizes = (baseFontSize: number) => {
  const [fontSize, setFontSize] = React.useState<number>(baseFontSize);

  const [containerLayout, setContainerLayout] = React.useState<LayoutRectangle[]>([]);
  const onContainerLayout = (index: number, layout: LayoutRectangle) => {
    setContainerLayout((cur) => replaceElement(index, layout, cur));
  };

  const [textLayout, setTextLayout] = React.useState<LayoutRectangle[]>([]);
  const onTextLayout = (index: number, layout: LayoutRectangle) => {
    setTextLayout((cur) => replaceElement(index, layout, cur));
  };

  // fit text to containers
  React.useEffect(() => {
    // find the font sizes that fit the containers in case the text overflows
    const fontSizes = textLayout.map((_l, i) => {
      if (!textLayout[i]?.height || !containerLayout[i]?.height) return fontSize;

      // text overflowing height
      if (textLayout[i]!.height > containerLayout[i]!.height) {
        return Math.ceil(
          baseFontSize * (containerLayout[i]!.height / textLayout[i]!.height),
        );
      }
      // text overflowing width
      if (textLayout[i]!.width > containerLayout[i]!.width) {
        const arbitraryWidthFactor = 0.8; // factor deemed necessary for width to fit
        return Math.ceil(
          baseFontSize * (containerLayout[i]!.width / textLayout[i]!.width) * arbitraryWidthFactor,
        );
      }

      return fontSize;
    });

    // of the texts, pick the smaller font size
    const theSmallerFontSize = Math.min(...fontSizes);
    setFontSize(Math.min(theSmallerFontSize, fontSize));
  }, [fontSize, textLayout, containerLayout, baseFontSize]);

  return {
    fontSize,
    onContainerLayout,
    onTextLayout,
  };
};

const styles = StyleSheet.create({
  text: {
    // color: '#111825',
    fontSize: R.fonts.Small,
    // marginTop: 16,
    // marginLeft: 35,
    // marginRight: 35,
    fontFamily: 'Meiryo',
    // fontFamily: 'PKNKSquareFreeVersion-Regular',z
    color:R.colors.kusuri.textApp,
  },
});

export default KusuriText;
export {KusuriText};
export {useAdaptiveFontSizes};
