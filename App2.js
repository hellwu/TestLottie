import React from 'react';
import LottieView from 'lottie-react-native';

export default class App2 extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(1, 12000);
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./anim/flow_bg.json')}
      />
    );
  }
}