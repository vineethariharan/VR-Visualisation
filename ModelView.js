import * as React from 'react';
import {Animated, View, asset} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import {connect} from './Store';
import {Easing} from 'react-native';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);
/**
 * Renders the actual model in 3D space, rotating it a full 360 degrees to show
 * it from all angles.
 */
class ModelView extends React.Component {
  state = {
    spinXValue: 0,
    spinYValue: 0,
    spinX: new Animated.Value(0),
    spinY: new Animated.Value(0)
  };
  constructor() {
    super();
    this.state = { spinX: new Animated.Value(0), spinY: new Animated.Value(0), spinXValue: 0, spinYValue: 0 };
  }
  spinAnimation(button){
    spinChangeX = 0
    spinChangeY = 0
    if (button === 37)
      spinChangeY = 10
    if (button === 38)
      spinChangeX = 10
    if (button === 39)
      spinChangeY = -10
    if (button === 40)
      spinChangeX = -10
    spinX = this.state.spinX._value;
    spinX = (spinX + spinChangeX)%360;
    spinY = this.state.spinY._value;
    spinY = (spinY + spinChangeY)%360;
    Animated.timing(
      this.state.spinX,
      {
        toValue: spinX,
        duration: 10,
        easing: Easing.linear
      }
    ).start();
    Animated.timing(
      this.state.spinY,
      {
        toValue: spinY,
        duration: 10,
        easing: Easing.linear
      }
    ).start();
  }


  // componentDidMount(){
  //   this.spinAnimation();
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.current !== this.props.current) {
  //     this.rotation.setValue(0);
  //     Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
  //   }
  // }
  

  render() {
    const spinX = this.state.spinX;
    const spinY = this.state.spinY;
    return (
      <Animated.View
      onInput={e => {
        const inputEvent = e.nativeEvent.inputEvent;
        if (inputEvent.action === 'down') {
          this.spinAnimation(inputEvent.button);
        }
      }}
      style={{
        transform: [
          {translate: [3, 0, -8]}, 
          {rotateX: spinX},
          {rotateY: spinY}
      ]
      }}
      >
        <AmbientLight intensity={1.0} color={'#ffffff'} />
        <PointLight
          intensity={0.4}
          style={{transform: [{translate: [0, 4, -1]}]}}
        />
          <AnimatedEntity
          style={{
            transform: [
              {translate: [3, 0, 0]}, 
              // {rotateX: spinX},
              // {rotateY: spinY}
          ]
          }}
          

            // source={{ obj: asset("earth.obj"), mtl: asset("earth.mtl") }}
            source={{gltf2: asset("AnimatedCube.gltf")}}
            // source={{gltf2: source.root.url}}
          />
          <AnimatedEntity
          style={{
            transform: [
              {translate: [-3, 0, 0]},
              // {rotateX: spinX}, 
              // {rotateY: spinY}
          ]
          }}

            // source={{ obj: asset("earth.obj"), mtl: asset("earth.mtl") }}
            source={{gltf2: asset("AnimatedCube.gltf")}}
            // source={{gltf2: source.root.url}}
          />
      </Animated.View>
    );
  }
}

const ConnectedModelView = connect(ModelView);

export default ConnectedModelView;
