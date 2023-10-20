import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

//Guideline sizes are based on the design file's app screen size
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};
