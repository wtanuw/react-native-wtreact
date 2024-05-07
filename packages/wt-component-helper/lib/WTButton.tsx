import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const MyButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const MyButton4 = props => {
  const {style, defaultStyle = false} = props;
  return (
    <TouchableOpacity
      style={{...(defaultStyle ? styles.button : {}), ...style}}
      // style={{...styles.button, ...style}}
      onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const MyButton2 = props => {
  const [isShowingText, setIsShowingText] = useState(true);

  //  useEffect(() => {
  //    const toggle = setInterval(() => {
  //      setIsShowingText(!isShowingText);
  //    }, 1000);

  //    return () => clearInterval(toggle);
  // })
  const handleBackgroundImg = (imageBg, backgroundImage) => {
    if (imageBg === true) {
      return (
        <ImageBackground
          imageStyle={styles.bg}
          style={styles.bg}
          source={backgroundImage}
          resizeMode={'center'}
        />
      );
    }
    return <Image />;
  };

  if (!isShowingText) {
    return null;
  }
  return (
    // <View>
    // <ImageBackground source={props.image2} resizeMode="cover" style={styles.image}>
    // </ImageBackground>
    // </View>
    <View style={{...styles.container, ...props.style}}>
      {/* {handleBackgroundImg(true, props.image)} */}
      <ImageBackground
        imageStyle={styles.bg}
        style={styles.bg}
        source={props.image2}
        resizeMode={'contain'}
      />
      <TouchableOpacity
        disabled={props.disabled}
        style={styles.container}
        activeOpacity={0.5}
        onPress={props.customClick}>
        <Image style={styles.image} source={props.image} />
      </TouchableOpacity>
      {/* <TouchableWithoutFeedback 
        onPress={onPress}
        style={styles.button}
      >
       <Image
          style={styles.image}
          source={mainImage}
          resizeMode={'contain'}
       />
      </TouchableWithoutFeedback> */}
    </View>
  );
};

const MyButton3 = ({onPress, disabled, children, ...props}) => {
  const [isDisabled, toggleDisable] = useState(disabled);
  const [timerId, setTimerId] = useState(null);

  // useEffect(() => {
  //     toggleDisable(disabled);
  // },[disabled]);
  useEffect(() => {
    return () => {
      toggleDisable(disabled);
      clearTimeout(timerId);
    };
  });
  const handleOnPress = () => {
    // console.log('press');
    toggleDisable(true);
    props.customClick();
    setTimerId(
      setTimeout(() => {
        // console.log('out');
        toggleDisable(false);
      }, 1000),
    );
  };
  // console.log(props);
  return (
    <View style={{...styles.container, ...props.style}}>
      <ImageBackground
        imageStyle={styles.bg}
        style={styles.bg}
        source={props.image2}
        resizeMode={'contain'}
      />
      <TouchableOpacity
        style={styles.container}
        onPress={handleOnPress}
        disabled={isDisabled}>
        {/* <TouchableHighlight style={styles.container} onPress={handleOnPress} disabled={isDisabled} > */}
        <Image style={{...styles.image}} source={props.image} />
        {/* </TouchableHighlight> */}
      </TouchableOpacity>
    </View>
  );
};

const ButtonOneTap = ({onPress, disabled, children, ...props}) => {
  const [isDisabled, toggleDisable] = useState(disabled);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    toggleDisable(disabled);
  }, [disabled]);

  useEffect(() => {
    return () => {
      toggleDisable(disabled);
      clearTimeout(timerId);
    };
  });

  const handleOnPress = () => {
    toggleDisable(true);
    onPress();
    setTimerId(
      setTimeout(() => {
        toggleDisable(false);
      }, 1000),
    );
  };
  return (
    <TouchableHighlight
      onPress={handleOnPress}
      {...props}
      disabled={isDisabled}>
      {children}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  desc: {
    /* 
    flex: 1, // require parent to have width, height, flex
    flex will define how your items are going to “fill” over the available space along your main axis. 
     Space will be divided according to each element's flex property. */
    /* 
    flexDirection: 'column', //column,row,column-reverse,row-reverse
    flexDirection controls the direction in which the children of a node are laid out. 
     This is also referred to as the main axis. The cross axis is the axis perpendicular to the main axis, or 
     the axis which the wrapping lines are laid out in. */
    /* 
    layoutDirection: 'LTR', //LTR,RTL
    Layout direction specifies the direction in which children and text in a hierarchy should be laid out. */
    /* 
    justifyContent: 'flex-start', //flex-start,flex-end,center,space-between,space-around,space-evenly
    justifyContent describes how to align children within the main axis of their container. 
     For example, you can use this property to center a child horizontally within a container 
     with flexDirection set to row or vertically within a container with flexDirection set to column. */
    /* 
    alignItems: 'stretch', //stretch,flex-start,flex-end,center,baseline
    alignItems describes how to align children along the cross axis of their container. 
     Align items is very similar to justifyContent but instead of applying to the main axis, 
     alignItems applies to the cross axis. */
    /* 
    alignSelf: 'stretch', //stretch,flex-start,flex-end,center,baseline
    alignSelf has the same options and effect as alignItems but instead of affecting the children within a container, 
     you can apply this property to a single child to change its alignment within its parent. 
     alignSelf overrides any option set by the parent with alignItems. */
    /* 
    alignContent: 'flex-start', //flex-start,flex-end,stretch,center,space-between,space-around
    alignContent defines the distribution of lines along the cross-axis. 
     This only has effect when items are wrapped to multiple lines using flexWrap. */
    /* 
    flexWrap: '', //nowrap, wrap
    The flexWrap property is set on containers and it controls what happens when children overflow the size of 
     the container along the main axis. By default, children are forced into a single line (which can shrink elements). 
     If wrapping is allowed, items are wrapped into multiple lines along the main axis if needed. */
    /* 
    flexBasis: 1,
    flexBasis is an axis-independent way of providing the default size of an item along the main axis. 
     Setting the flexBasis of a child is similar to setting the width of that child if its parent is a container 
     with flexDirection: row or setting the height of a child if its parent is a container with flexDirection: column. 
     The flexBasis of an item is the default size of that item, the size of the item before any flexGrow and flexShrink 
     calculations are performed. */
    /*
    flexGrow: 1,
    flexGrow describes how any space within a container should be distributed among its children along the main axis. 
     After laying out its children, a container will distribute any remaining space according to the flex grow values 
     specified by its children.
     flexGrow accepts any floating point value >= 0, with 0 being the default value. 
     A container will distribute any remaining space among its children weighted by the children’s flexGrow values. */
    /*  
    flexShrink: 1,
    flexShrink describes how to shrink children along the main axis in the case in which the total size of the children 
    overflows the size of the container on the main axis. flexShrink is very similar to flexGrow and can be thought of 
    in the same way if any overflowing size is considered to be negative remaining space. These two properties also work 
    well together by allowing children to grow and shrink as needed.
     flexShrink accepts any floating point value >= 0, with 0 being the default value (on the web, the default is 1). 
     A container will shrink its children weighted by the children’s flexShrink values. */
    // width: '100%', //auto,pixels,percentage
    // height: '100%', //auto,pixels,percentage
    // position: 'relative', //relative,absolute
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    // padding: 0,
    // aspectRatio: 0.5,
    // backgroundColor: 'red',
  },
  template: {
    // flex: 1,
    // flexDirection: 'column', //column,row,column-reverse,row-reverse
    // layoutDirection: 'LTR', //LTR,RTL
    // justifyContent: 'flex-start', //flex-start,flex-end,center,space-between,space-around,space-evenly
    // alignItems: 'stretch', //stretch,flex-start,flex-end,center,baseline
    // alignSelf: 'stretch',
    // alignContent: 'flex-start', //flex-start,flex-end,stretch,center,space-between,space-around
    // flexWrap: '', //nowrap, wrap
    // flexGrow: 1,
    // flexShrink: 1,
    // flexBasis: 1,
    // width: '100%', //auto,pixels,percentage
    // height: '100%', //auto,pixels,percentage
    // position: 'relative', //relative,absolute
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    // padding: 0,
    // aspectRatio: 0.5,
    // backgroundColor: 'red',
  },
  templateParent: {
    flex: 1, // require parent to have width, height, flex
    flexDirection: 'column', //column,row,column-reverse,row-reverse
    justifyContent: 'flex-start', //flex-start,flex-end,center,space-between,space-around,space-evenly
    alignItems: 'stretch', //stretch,flex-start,flex-end,center,baseline
    flexBasis: 1,
    flexGrow: 1, // 0>=0
    flexShrink: 1, // 0>=0
  },
  templateChildren: {
    flex: 1, // require parent to have width, height, flex
    alignSelf: 'stretch', //stretch,flex-start,flex-end,center,baseline
    flexBasis: 1,
    flexGrow: 1, // 0>=0
    flexShrink: 1, // 0>=0
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f05555',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
  text: {
    color: '#ffffff',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  bg: {
    // flex:1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // height: '100%',
    // width: '100%'
    // opacity: 0.3
  },
  image: {
    flex: 1, // require parent to have width, height, flex
    alignSelf: 'center', //stretch,flex-start,flex-end,center,baseline
    flexBasis: 1,
    flexGrow: 1, // 0>=0
    flexShrink: 1, // 0>=0
    resizeMode: 'contain',
    width: '100%',
  },
});

export default MyButton4;
export {MyButton4};
export {MyButton2};
export {ButtonOneTap};
export {MyButton3};
