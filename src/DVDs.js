import React, {Component} from "react";

const divStyle = {
  margin: "0px",
  padding: "0px",
  overflow: "hidden"
};

class DVD extends Component {
  render() {
    return (
      <div style={divStyle}>
        <iframe src="https://libib.com/u/gnkatchmar" title="dvd"></iframe>
      </div>
    )
  }
}

export default DVD;