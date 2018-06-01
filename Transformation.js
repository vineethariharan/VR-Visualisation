import * as React from 'react';
import {Animated} from 'react-360';
import {Easing} from 'react-native';


export const defaultState = {
    spinX: new Animated.Value(0),
    spinY: new Animated.Value(0),
    spinZ: new Animated.Value(0),
    positionX: new Animated.Value(-505),
    positionY: new Animated.Value(300),
    positionZ: new Animated.Value(-30),
  };
export const currentState = defaultState;

export function spinAnimation(direction){
    spinChangeX = 0
    spinChangeY = 0
    if (direction === "up")
      spinChangeX = 10
    if (direction === "left")
      spinChangeY = 10
    if (direction === "right")
      spinChangeY = -10
    if (direction === "down")
      spinChangeX = -10
    spinX = currentState.spinX._value;
    spinX = (spinX + spinChangeX)%360;
    spinY = currentState.spinY._value;
    spinY = (spinY + spinChangeY)%360;
    Animated.timing(
        currentState.spinX,
      {
        toValue: spinX,
        duration: 10,
        easing: Easing.ease
      }
    ).start();
    Animated.timing(
        currentState.spinY,
      {
        toValue: spinY,
        duration: 10,
        easing: Easing.ease
      }
    ).start();
  }


  export function zoom(direction){
    positionChangeZ = 0
    
    if (direction === "in")
      positionChangeZ = 5
    if (direction === "out")
      positionChangeZ = -5
    positionZ = currentState.positionZ._value;
    positionZ = positionZ + positionChangeZ;
    Animated.timing(
        currentState.positionZ,
      {
        toValue: positionZ,
      }
    ).start();
  }


export function move(direction){
    positionChangeX = 0
    positionChangeY = 0
    if (direction === "up")
      positionChangeY = 5
    if (direction === "left")
      positionChangeX = -5
    if (direction === "right")
      positionChangeX = 5
    if (direction === "down")
      positionChangeY = -5
    positionX = currentState.positionX._value;
    positionX = positionX + positionChangeX;
    positionY = currentState.positionY._value;
    positionY = positionY + positionChangeY;
    Animated.timing(
        currentState.positionX,
      {
        toValue: positionX
      }
    ).start();
    Animated.timing(
        currentState.positionY,
      {
        toValue: positionY
      }
    ).start();
  }

//   export function reset(direction){
//       Animated.timing(
//           currentState,
//           {
//             toValue: defaultState
//           }
//       )
//     currentState = defaultState;
//   }