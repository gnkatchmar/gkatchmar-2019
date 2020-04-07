import React, {Component} from "react";

const divStyle = {
  margin: "0px",
  padding: "0px",
  overflow: "hidden"
};

class Gaming extends Component {
  render() {
    return (
      <div style={divStyle}>
        <iframe src="https://cardboardbutler.azureedge.net/#usernames=henchmanpdx" title="gaming"></iframe>
      </div>
    )
  }
}

export default Gaming;