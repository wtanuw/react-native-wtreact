import React from 'react';
import {StyleSheet} from 'react-native';

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
  });