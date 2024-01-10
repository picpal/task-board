import React, { Component } from "react";

class BackgroundColor extends Component {
  prevColor = null;

  setBgColor = (color) => {
    if (!document.body) return;
    document.body.style.background = color;
  };

  componentDidMount() {
    const { color } = this.props;
    if (!document.body) return;
    this.prevColor = document.body.style.background;
    // console.log(this.prevColor.toString());
    this.setBgColor(color);
  }

  componentWillUnmount() {
    if (typeof this.prevColor !== "string") return;
    this.setBgColor(this.prevColor);
  }

  render() {
    return <div />;
  }
}

export default BackgroundColor;
