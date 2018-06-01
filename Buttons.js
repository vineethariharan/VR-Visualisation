import React from "react";
import { StyleSheet, Text, VrButton, View } from "react-360";
export default class Button extends React.Component {
  constructor() {
    super();
    this.styles = StyleSheet.create({
      button: {
        margin: 5,
        height: 50,
        width: 50,
        backgroundColor: "red"
      },
      text: {
        fontSize: 10,
        textAlign: "center"
      }
    });
  }

  render() {
    return (
      <VrButton
        style={this.styles.button}
        onClick={() => this.props.callback()}
      >
        <Text style={this.styles.text}>{this.props.text}</Text>
      </VrButton>
    );
  }
}