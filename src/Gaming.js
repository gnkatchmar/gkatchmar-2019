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
        <iframe src="https://geekgroup.app/users/henchmanpdx/collection?sort=rating.bgg&sortReverse=1" title="gaming"></iframe>
      </div>
    )
  }
}

export default Gaming;