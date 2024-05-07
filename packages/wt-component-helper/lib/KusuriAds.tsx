import * as React from 'react';
import { FlatList, Animated, View, Text, StyleSheet, TouchableHighlight, Linking } from 'react-native';
// import {ICarol}
import { JSONDateToString, fixpath, isIOS, isAndroid, isDEBUG, diffDMinute, JSONToObject, isSIMU, maxTime } from 'app/Setting';
import { Dimensions } from 'react-native';
import R from 'app/resource/R';
import {MyButton2 as WTButton} from 'app/ponent/WTButton'
import ScalableImage from 'react-native-scalable-image'
import type {Banner} from 'app/model/APIApp'
import * as Shared from 'app/Shared'
import RNAnimatedScrollIndicators from 'react-native-animated-scroll-indicators';

type ICarouselProps = {
  data:BannerAds[];
  counting:boolean;
  }
  export type BannerAds = {
    url:string
    uri:string
    order:number
  }
const AlertProgress = (props) => {
  // const {style, defaultStyle = false} = props;
  // const {gray, debug, negative} = props;
  // const {disabled} = props;
  // const {onPress} = props;
  // var styleObj = StyleSheet.flatten([style]);
  return (
    <></>
  );
};

function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const Carousel = (props: ICarouselProps) => {

  const imageRef = React.createRef<FlatList>();
  const [active, setActive] = React.useState(0);
  const [intervalID, setintervalID] = React.useState<NodeJS.Timer|null>();
  const indexRef = React.useRef(active);
  indexRef.current = active;
  // useInterval(() => {
  // if (active < Number(props?.data?.length) - 1) {
  // console.log('active + 1',active + 1)
  // setActive(active + 1);
  // } else {
  // console.log('active',0)
  // setActive(0);
  // }}, 6000);

  React.useEffect(() => {
    if (props.counting) {
      if (intervalID) {
        // console.log('set but clearinterval',intervalID)
        clearInterval(intervalID);
        setintervalID(null);
      }
      var oneSecInterval = setInterval(() => {
        // console.log(oneSecInterval)
        // console.log('length',props?.data?.length)
        // console.log('active < Number(props?.data?.length', active, '<', Number(props?.data?.length))
        if (active < Number(props?.data?.length) - 1) {
        // console.log('active + 1 = ',active + 1)
        setActive(active + 1);
        } else {
        // console.log('active = ',0)
        setActive(0);
        }}, 10000);
        // console.log('setinterval',oneSecInterval)
      setintervalID(oneSecInterval);
    } else {
      // console.log('clearinterval',intervalID)
      if (intervalID) {
        // console.log('clearinterval',intervalID)
        clearInterval(intervalID);
        setintervalID(null);
      }
    }
  },
  [props.counting, props.data,active ],);

  React.useEffect(() => {
    if(props.data&&props.data.length>active) {

    // console.log('scrollToIndex',active)
  imageRef?.current?.scrollToIndex({ index: active, animated: true });
  }
  }, [active]);
  const onScrolla = React.useCallback(
    event => {
      if (intervalID) {
        clearInterval(intervalID);
        setintervalID(null);
      }
  },
  [])

  var scrollX = new Animated.Value(0);
  const { width } = Dimensions.get('window');
  
  const onScroll = 
    Animated.event(
      [{ nativeEvent: { contentOffset: { x: scrollX } } }],
      { useNativeDriver: false })
    
  ;

  const onScrollEnd = React.useCallback(
  event => {
  const slideSize = event.nativeEvent.layoutMeasurement.width;
  // console.log('slideSize',slideSize)
  const index = event.nativeEvent.contentOffset.x / slideSize;
  // console.log('event.nativeEvent.contentOffset.x',event.nativeEvent.contentOffset.x)

  const roundIndex = Math.round(index);
  // console.log('roundIndex',roundIndex)
  const distance = Math.abs(roundIndex - index);
  const isNoMansLand = 0.4 < distance;
  // console.log('roundIndex !== indexRef.current && !isNoMansLand',roundIndex,' !== ',indexRef.current,' && ',!isNoMansLand)
  if (roundIndex !== indexRef.current && !isNoMansLand) {

    // console.log('active roundIndex',roundIndex)
  setActive(roundIndex);
  }
  },
  [active]);
  const _renderItemScale = ({ item, index }) => { return (
  <View style={{...styles.container, ...{
    width: layout.width,
    // height: 100,
    minHeight:150,
    flex:1,alignItems:'flex-start',
    }}}>
      <TouchableHighlight
        // disabled={props.disabled}
        style={styles.container}
        activeOpacity={0.5}
        // onPress={props.customClick}
        onPress={ async () => {
          const canOpen = await Linking.canOpenURL(item.url);
          if (canOpen) {
            Linking.openURL(item.url);
          }
        }}
        >
        <ScalableImage 
        width={layout.width}
        style={{width: layout.width, height:'auto'}} 
        source={{uri:fixpath(item.uri)}} />
      </TouchableHighlight>
    </View>
  );};
  const _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          // padding: 16,
          // borderWidth:4,
          // backgroundColor: 'yellow',
          width: layout.width,
          // height: 100,
          minHeight:150,
          flex:1,alignItems:'flex-start',
        }}>
      <WTButton key={index} image={{uri:fixpath(item.uri)}} 
          style={{width: layout.width, height:'auto'}} 
            customClick={ async () => {
              const canOpen = await Linking.canOpenURL(item.url);
              if (canOpen) {
                Linking.openURL(item.url);
              }
            }}
          />
      </View>
    );
  };
  const [layout, setLayout] = React.useState({
    width: 0,
    height: 0,
  });
  return (
  <View style={{...styles.container}}>
  <FlatList
  showsHorizontalScrollIndicator={false}
  ref={imageRef}
  // onScrollBeginDrag={onScrolla}
    onScroll={onScroll}
  onScrollEndDrag={onScrollEnd}
  onScrollToIndexFailed={()=> {
    
  }}
  pagingEnabled
  data={props.data}  //image data
  horizontal
  onLayout={(event) => setLayout(event.nativeEvent.layout)}
  // style={{backgroundColor:'blue'}}
  renderItem={_renderItemScale}
  // renderItem={({ item, index }) => (
  //   <TouchableHighlight
  //     key={item.key}
  //     style={{width:'100%', backgroundColor:'blue'}}
  //     onPress={() => this._onPress(item)}>
  //     <View style={{width:'100%',  backgroundColor: 'white' }}>
  //       <Text>{4}</Text>
  //     </View>
  //   </TouchableHighlight>
  //   // <WTButton key={index} image={{uri:fixpath(item)}} 
  //   //       style={{width:'100%', borderWidth:4, height:100, backgroundColor:'lightblue' }} 
  //   //         customClick={ async () => {
  //   //           const canOpen = await Linking.canOpenURL(item.url);
  //   //           if (canOpen) {
  //   //             Linking.openURL(item.url);
  //   //           }
  //   //         }}
  //   //       />
  // //   <View key={index} style={{width:'100%', minHeight:200, alignItems:'center'}}>
  // //             <View 
  // //               style={{
  // //               flex: 1,
  // //               width: '100%',
  // //               // height: 200,
  // //               backgroundColor:'yellow',
  // //               borderWidth:1,
  // //               alignItems:'center',
  // //               }}
  // //             >
  // //             <Image 
  // //               key={index} 
  // //               source={{uri: fixpath(item)}}
  // //               // source={R.images.images_patient_btn_cancelorder}
  // //               resizeMode="contain"
  // //               // width={Dimensions.get('window').width*0.84}
  // //               style={{
  // //                 // flex: 1,
  // //                 // resizeMode:"contain",
  // //               borderWidth:5,
  // //               borderColor:'purple',
  // //               width: '100%',
  // //                 // height: 200,
  // //                 marginBottom:10,
  // //                 // marginHorizontal:10,
  // //                 backgroundColor:'blue'
  // //               }} />
  // //           </View>
  // //  {/* <Text>{item}</Text> */}
  // //         </View>
  // //           // <Image
  // //           // key={index}
  // //           // source={{ uri: item }}
  // //           // resizeMode="contain"
  // //           // style={{
  // //           //   flex: 1,
  // //           //   resizeMode:"contain",
  // //           //   width: 100,
  // //           //   height: 200,
  // //           //   marginBottom:10,
  // //           //   backgroundColor:'green'
  // //           // }}
  // //           // />

  //           )}
    />
      <View style={{backgroundColor:'orange'}}> 
        {/* //this is for index container */}
        {/* {props.data?.map((item, index) => (
        <View key={index}>
          {active === index 
          ? (<Text 
              style={[index == active ? styles.activeIndex : null]}>
              {index + 1} ={item.order}
            </Text>
          ) : (<Text 
            style={[index == active ? styles.activeIndex : null]}>
            {'*'}
          </Text>
          )}
        </View>
        ))}
        <Text>///////////{active }==={index }</Text>
        <Text>{props.data?.length}</Text> */}
      </View>
      <View style={{
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            marginVertical: 5,
            // position: 'absolute'
          }}>
      <RNAnimatedScrollIndicators
            numberOfCards={props.data.length}
            scrollWidth={width}
            activeColor={'black'}
            inActiveColor={'gray'}
            scrollAnimatedValue={scrollX}
          />
          </View>

    </View>
  );
};
export default Carousel


const styles = StyleSheet.create({
  safe: {
    // ...Shared.sharedstyles.safe,
  },
  container: {
    // backgroundColor:'red',
    // flex:1,
    // height:200,
    width:'100%',
    ...Shared.sharedstyles.maxwidthipad,
  },
  button: {
  },
  image: {
  },
});

// export const Carousel: React.FC<ICarouselProps> = (props: ICarouselProps) => {
//   const imageRef = createRef<FlatList>();
//   const [active, setActive] = useState(0);
//   const indexRef = useRef(active);
//   indexRef.current = active;
//   useInterval(() => {
//   if (active < Number(props?.data?.mobile?.length) — 1) {
//   setActive(active + 1);
//   } else {
//   setActive(0);
//   }}, 6000);
//   useEffect(() => {
//   imageRef?.current?.scrollToIndex({ index: active, animated: false });
//   }, [active]);
//   const onScroll = useCallback(
//   event => {
//   const slideSize = event.nativeEvent.layoutMeasurement.width;
//   const index = event.nativeEvent.contentOffset.x / slideSize;
//   const roundIndex = Math.round(index);
//   const distance = Math.abs(roundIndex — index);
//   const isNoMansLand = 0.4 < distance;
//   if (roundIndex !== indexRef.current && !isNoMansLand) {
//   setActive(roundIndex);
//   }},
//   [active],);
//   return (
//   <View style={styles.container}>
//   <FlatList
//   showsHorizontalScrollIndicator={false}
//   ref={imageRef}
//   onScroll={onScroll}
//   pagingEnabled
//   data={props.data}  //image data
//   horizontal
//   renderItem={({ item, index }) => (
//   <Image
//   key={index}
//   source={{ uri: item.imageURL }}
//   />)}
//   />
//   <View> //this is for index container
//   {props.data?.image?.map((item, index) => (
//   <View key={index}>
//   {active === index ? (
//   <Text
//   style={[index == active ? styles.activeIndex : null]}>
//   {index + 1}
//   </Text>
//   ) : null}
//   </View>
//   ))}
//   <Text>/</Text>
//   <Text>{props.data?.image?.length}</Text>
//   </View>
//   </View>
//   );