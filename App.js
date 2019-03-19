import React from 'react';
import { Animated, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

var {deviceHeight , deviceWidth} = Dimensions.get('window');
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

  render() {
    console.log('deviceWidth = '+deviceWidth+', deviceHeight = '+deviceHeight);
    return (
      <LottieView style={{width: deviceWidth, height: deviceHeight}} source={require('./anim/flow_bg.json')} progress={this.state.progress} />
    );
  }
}
