import * as React from 'react';
import {Animated, View, asset} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import {connect} from './Store';
import {Easing} from 'react-native';
import Button from './ControlButtons.js'
import * as State from './Transformation.js';
const AnimatedEntity = Animated.createAnimatedComponent(Entity);
/**
 * Renders the actual model in 3D space, rotating it a full 360 degrees to show
 * it from all angles.
 */
class ModelView extends React.Component {
  constructor() {
    super();
    this.state={
      s1: 0,
    rotation1: new Animated.Value(0),
    t1: [1,1,1],
    }
  }
  componentDidMount(){
  this.runAnimation();
  }
  runAnimation(){
    this.state.rotation1.setValue(0);
    Animated.timing(this.state.rotation1, {toValue: 360, duration: 20000, easing: Easing.linear}).start(() => this.runAnimation());
  }
  changeShape(offset){
    console.log("abc"+offset);
    this.setState({s1:offset});
  }
  render() {
  const spinX = State.currentState.spinX;
  const spinY = State.currentState.spinY;
  const positionX = State.currentState.positionX;
  const positionY = State.currentState.positionY;
  const positionZ = State.currentState.positionZ;

  var offset = [];
  var offset2 = [];
  var shelfWidth=10;
  var shelfHeight=5;
  var shelfDepth=5;
  var nor=2;
  var nos=2;
  var brh=0.7;
  var srw=0.7;
  var cubex;
  var cubey;
  var cubez;
  var sx;
  var sy;
  var sz;
  var boundingBoxx;
  var boundingBoxy;
  var count1=0;
  var initial;
  var ax;
  var ay;
  initial=(shelfWidth+srw+srw)/2;
  ax=-initial;
  ay=brh/2;
  for(var i=1;i<=nos;i++){
   var count2=1;
   for(var j=1;j<=nor+2;j++){
     if(i==1&&j==1){
       sx=shelfWidth+srw+srw;
       sy=brh;
       sz=shelfDepth;
       cubex=0;
       cubey=0;
       cubez = -2;
     }
     else if(i==1&&j!=1){
       sx=shelfWidth+srw+srw;
       sy=brh;
       sz=shelfDepth;
       cubex=0;
       cubey=(brh/2)+((j-1)*shelfHeight)+((count2)*boundingBoxy);
       cubez = -2;
     }
     else if(j==1){
       sx=shelfWidth+srw;
       sy=brh;
       sz=shelfDepth;
       cubex=((shelfWidth+srw)/2)+(count1*boundingBoxx)+initial;
       cubey=0;
       cubez = -2;
       // console.log(((shelfWidth+srw)/2));
       // console.log(cube.position);
     }
     else if(j!=1){
       sx=shelfWidth+srw;
       sy=brh;
       sz=shelfDepth;
       cubex=((shelfWidth+srw)/2)+(count1*boundingBoxx)+initial;
       cubey=(brh/2)+((j-1)*shelfHeight)+((count2)*boundingBoxy);
       cubez = -2;
     }
     cubey=cubey-1;
     cubex=cubex-1;
     // cube.geometry.computeBoundingBox();
     boundingBoxx = sx/2;
     boundingBoxy=sy/2;
     offset.push([[cubex,cubey,cubez],[sx,sy,sz]]);
     // count2=count2+2;
     if(j>=2){
     count2=count2+2;
   }
     if(i==1&&j==1){
       x=cubex;
       y=cubey;
     }
     // console.log(cube);
   }
   if(i>=2){
   count1=count1+2;
 }
 }

 var boundingBox2x;
boundingBox2x = srw/2;
for(var i=1;i<=nos+1;i++){
 var count2=1;
 for(var j=1;j<=nor+1;j++){


   sx=srw;
   sy=shelfHeight;
   sz=shelfDepth;
   cubex=x+ax+boundingBox2x+((i-1)*(shelfWidth+2*boundingBox2x));
   cubey=y+((j-1)*shelfHeight)+((count2)*ay)+(shelfHeight/2);
   cubez=-2;
   boundingBox2 = srw/2;
   offset.push([[cubex,cubey,cubez],[sx,sy,sz]]);
   if(i!==nos+1){

          sx=shelfWidth/6;
          sy=shelfHeight/6;
          sz=shelfDepth;
          cubex=x+ax+boundingBox2x+((i-1)*(shelfWidth+2*boundingBox2x))+3.2;
          cubey=y+((j-1)*shelfHeight)+((count2)*ay)+(shelfHeight/4);
          cube1z=-2;
          offset2.push([[cubex,cubey,cubez],[sx,sy,sz]]);

          sx=shelfWidth/8;
          sy=shelfHeight/10;
          sz=shelfDepth;
          cubex=x+ax+boundingBox2x+((i-1)*(shelfWidth+2*boundingBox2x))+shelfWidth/4+5.8;
          cubey=y+((j-1)*shelfHeight)+((count2)*ay)+(shelfHeight/6);
          cubez=-2;
          offset2.push([[cubex,cubey,cubez],[sx,sy,sz]]);
         }

   // console.log(cube);
   count2=count2+2;
 }
 // if(i!=1){
 //   count1=count1+2;
 // }
}
// var abc=[];
// abc.push([[0,0,-1],0.1]);
// abc.push([[0.2,0.2,-1],0.1]);
var Cubes = offset.map((offset)=>{
  // console.log(offset[1]);
  return <AnimatedEntity key={parseInt(i)} style={{ transform: [{translate: offset[0]},{scale: offset[1]}, ]}} source={{gltf2: asset("AnimatedCube.gltf")}}/>
})
var Products = offset2.map((offset2)=>{
  console.log(offset2[1]);
  return (
    <Animated.View
    onInput={e => {
      const inputEvent = e.nativeEvent.inputEvent;
      // console.log(Animated.View.style);
      if (inputEvent.action === 'down') {
        // console.log(inputEvent.button);
        if(inputEvent.source === 'mouse')
        // this.s=[0.1,0.1,0.1];
        // this.setState({s1:0.1});
        this.changeShape(offset2[1]);
        // console.log(this.s);
        // this.spinAnimation(inputEvent.button);
      }
    }}


    >
    <AnimatedEntity key={parseInt(i)} style={{ transform: [{translate: offset2[0]},{scale: offset2[1]}, ]}} source={{gltf2: asset("AnimatedCube.gltf")}}/>
    </Animated.View>
  )
})
    return (
      <View>




      <AnimatedEntity style={{ transform: [{translate: [-15,5,-10]},{rotateY: this.state.rotation1},{scale: this.state.s1}]}} source={{gltf2: asset("AnimatedCube.gltf") }}/>

      <Animated.View
      style={{
        width: 1000,
        height: 600,
        // backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
          {translateX: positionX}, 
          {translateY: positionY}, 
          {translateZ: positionZ},
          {rotateX: spinX},
          {rotateY: spinY},
      ]
      }}
      >
        <AmbientLight intensity={1.0} color={'#ffffff'} />
        <PointLight
          intensity={0.4}
          style={{transform: [{translate: [0, 4, -1]}]}}
        />
          {Cubes}
          {Products}
      </Animated.View>
      </View>
    );
  }
}
export default ModelView;
