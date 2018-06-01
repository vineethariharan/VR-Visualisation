import React from "react";
import { StyleSheet, Text, VrButton, View } from "react-360";

import Button from './Buttons'
import ModelView from "./ModelView";
import {spinAnimation, zoom, move} from './Transformation';

export default class ButtonPanel extends React.Component{
    styles = StyleSheet.create({
        emptySpace: {
          margin: 5,
          height: 50,
          width: 50,
        },
        text: {
            height: 20,
            fontSize: 10,
            textAlign: "center"
          }
      });
    render(){
        return(
            <View 
                style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderColor: '#303050',
                borderWidth: 2,
                padding: 10,
                flexDirection: 'column',
                transform: [{translate: [2, 2, -5]}],
                }}
                >
                <Text style={this.styles.text}>
                    ROTATE
                </Text>
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    transform: [{translate: [2, 2, -5]}],
                    }}
                    >
                    <View style={this.styles.emptySpace}/>
                    <Button text="UP" 
                            callback = {() => spinAnimation("up") }/>
                    <View style={this.styles.emptySpace}/>
                </View>
    
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    transform: [{translate: [2, 2, -5]}],
                    }}
                    >
                    <Button text="LEFT"
                            callback={() => spinAnimation("left")}/>
                    <Button text="DOWN"
                            callback={() => spinAnimation("down")}/>
                    <Button text="RIGHT"
                            callback={() => spinAnimation("right")}/>
                </View>

                {/* Translation in-out */}
                <Text style={this.styles.text}>
                    MOVE
                </Text>
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    transform: [{translate: [2, 2, -5]}],
                    }}
                    >
                    <View style={this.styles.emptySpace}/>
                    <Button text="MOVE UP" 
                            callback={() => move("up")}/>
                    <View style={this.styles.emptySpace}/>
                </View>
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    transform: [{translate: [2, 2, -5]}],
                    }}
                    >
                    <Button text="Move Left" 
                            callback={() => move("left")}/>
                    <View style={this.styles.emptySpace}/>
                    <Button text="Move Right" 
                            callback={() => move("right")}/>
                </View>
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    transform: [{translate: [2, 2, -5]}],
                    }}
                    >
                    <View style={this.styles.emptySpace}/>
                    <Button text="Move Down" 
                            callback={() => move("down")}/>
                    <View style={this.styles.emptySpace}/>
                </View>
                {/* Zoom in-out */}
                <Text style={this.styles.text}>
                    ZOOM
                </Text>
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    transform: [{translate: [2, 2, -5]}],
                    }}
                    >
                    <Button text="Zoom In" 
                            callback={() => zoom("in")}/>
                    <View style={this.styles.emptySpace}/>
                    <Button text="Zoom Out" 
                            callback={() => zoom("out")}/>
                </View>
                {/* <Text style={this.styles.text}>
                    RESET
                </Text>
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    transform: [{translate: [2, 2, -5]}],
                    }}
                    >
                    <View style={this.styles.emptySpace}/>
                    <Button text="Reset" 
                            callback={() => reset()}/>
                    <View style={this.styles.emptySpace}/>
                </View> */}
            </View>
            
        );
    }
}