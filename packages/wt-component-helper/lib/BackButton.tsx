import * as React from 'react';
import {useEffect, useState} from 'react';
import {Platform, BackHandler, ToastAndroid} from 'react-native';
import {
  useNavigation,
  useIsFocused,
  useNavigationState,
} from '@react-navigation/native';

/*------------------------------------------*/

export const ExecuteOnlyOnAndroid = props => {
  const {message} = props;
  const [exitApp, setExitApp] = useState(0);
  const isFocused = useIsFocused();
  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 2000); // 2 seconds to tap second-time

    // if (!isFocused) {
    //   return false;
    // }
    console.log('lll');
    if (exitApp === 0) {
      setExitApp(exitApp + 1);

      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });
  return <></>;
};

export function DoubleTapToClose(props) {
  const {message = 'tap back again to exit the App'} = props;
  return Platform.OS !== 'ios' ? (
    <ExecuteOnlyOnAndroid message={message} />
  ) : (
    <></>
  );
}
/*------------------------------------------*/

function DoubleTapToExit(props) {
  const {message = 'tap back again to exit the App'} = props;
  return Platform.OS !== 'ios' ? (
    <ExecuteOnlyOnAndroid message={message} />
  ) : (
    <></>
  );
}
/*------------------------------------------*/

const ExecuteOnlyOnAndroid2 = props => {
  const {message} = props;
  const [exitApp, setExitApp] = useState(0);
  const navigation = useNavigation();
  const index = useNavigationState(state => state.index);
  const routes = useNavigationState(state => state.routes);
  const state = useNavigationState(state => state);
  const routesLength = useNavigationState(state => state.routes.length);
  const history = useNavigationState(state => state.history);
  const isFocused = useIsFocused();
  useEffect(() => {
    const backAction = () => {
      // if (allow) {
      //   navigation.pop()
      // }
      console.log(isFocused);
      if (!isFocused) {
        return false;
      }
      // console.log(index);
      // console.log(routes);
      // console.log(history);
      // if (isFocused) {
      //   navigation.pop();
      // }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return <></>;
};

function TapToBackNavigation(props) {
  return Platform.OS !== 'ios' ? <ExecuteOnlyOnAndroid2 /> : <></>;
}
/*------------------------------------------*/

const ExecuteOnlyOnAndroid3 = props => {
  const {message} = props;
  const {persistant} = props;
  const {onBackPress} = props;
  const [exitApp, setExitApp] = useState(0);
  const isFocused = useIsFocused();
  const index = useNavigationState(state => state.index);
  const routes = useNavigationState(state => state.routes);
  const state = useNavigationState(state => state);
  const routesLength = useNavigationState(state => state.routes.length);

  // If one subscription returns true, then subscriptions registered earlier will not be called.
  // If no subscription returns true or none are registered, it programmatically invokes the default back button functionality to exit the app.
  // Warning for modal users: If your app shows an opened Modal, BackHandler will not publish any events (see Modal docs).

  const backAction = () => {
    // if (!this.onMainScreen()) {
    //   this.goBack();
    //   /**
    //    * When true is returned the event will not be bubbled up
    //    * & no other back action will execute
    //    */
    //   return true;
    // }
    // /**
    //  * Returning false will let the event to bubble up & let other event listeners
    //  * or the system's default back action to be executed.
    //  */
    // return false;
    setTimeout(() => {
      setExitApp(0);
    }, 2000); // 2 seconds to tap second-time

    // console.log(state);
    if (!isFocused) {
      return false;
    }

    if (exitApp === 0) {
      setExitApp(exitApp + 1);

      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };
  useEffect(
    () => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    } /*, []*/,
  );
  return <></>;
};

function SmartBack(props) {
  const {message = 'tap back again to exit the App'} = props;
  const {persistant = true} = props;
  return Platform.OS !== 'ios' ? (
    <ExecuteOnlyOnAndroid3 message={message} persistant={persistant} />
  ) : (
    <></>
  );
}

/*------------------------------------------*/

const ExecuteOnlyOnAndroid4 = props => {
  const {message} = props;
  const {persistant} = props;
  const {onBackPress} = props;
  const [exitApp, setExitApp] = useState(0);
  const isFocused = useIsFocused();
  const index = useNavigationState(state => state.index);
  const routes = useNavigationState(state => state.routes);
  const state = useNavigationState(state => state);
  const routesLength = useNavigationState(state => state.routes.length);

  // If one subscription returns true, then subscriptions registered earlier will not be called.
  // If no subscription returns true or none are registered, it programmatically invokes the default back button functionality to exit the app.
  // Warning for modal users: If your app shows an opened Modal, BackHandler will not publish any events (see Modal docs).

  const backAction = () => {
    // if (!this.onMainScreen()) {
    //   this.goBack();
    //   /**
    //    * When true is returned the event will not be bubbled up
    //    * & no other back action will execute
    //    */
    //   return true;
    // }
    // /**
    //  * Returning false will let the event to bubble up & let other event listeners
    //  * or the system's default back action to be executed.
    //  */
    // return false;
    setTimeout(() => {
      setExitApp(0);
    }, 2000); // 2 seconds to tap second-time

    console.log('why');
    console.log(onBackPress);
    console.log(isFocused);
    if (!isFocused) {
      return false;
    }
    if (onBackPress) {
      return onBackPress();
    } else {
      if (exitApp === 0) {
        setExitApp(exitApp + 1);

        ToastAndroid.show(message, ToastAndroid.SHORT);
      } else if (exitApp === 1) {
        BackHandler.exitApp();
      }
      return true;
    }
  };
  useEffect(
    () => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    } /*, []*/,
  );
  return <></>;
};

function SmarterBack(props) {
  const {message = 'tap back again to exit the App'} = props;
  const {persistant = true} = props;
  const {onBackPress} = props;
  console.log('ww');
  return Platform.OS !== 'ios' ? (
    <ExecuteOnlyOnAndroid4
      message={message}
      persistant={persistant}
      onBackPress={onBackPress}
    />
  ) : (
    <></>
  );
}

export default SmartBack;
export {DoubleTapToExit, TapToBackNavigation, SmartBack, SmarterBack};
