// orientation.js

import Orientation from 'react-native-orientation';

const setPortraitOrientation = () => {
  Orientation.lockToPortrait();
};

const subscribeToOrientationChanges = (callback) => {
  Orientation.addOrientationListener(callback);
};

const unsubscribeFromOrientationChanges = (callback) => {
  Orientation.removeOrientationListener(callback);
};

const CustomOrientationService = {
  setPortraitOrientation,
  subscribeToOrientationChanges,
  unsubscribeFromOrientationChanges,
};

export default CustomOrientationService;
