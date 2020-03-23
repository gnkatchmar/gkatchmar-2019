import React, {Component} from "react";

const divStyle = {
  margin: "0px",
  padding: "0px",
  overflow: "hidden"
};

class Gaming extends Component {
  render() {
    // if(navigator.userAgent.indexOf("Chrome") !== -1 )
    // {
    //   alert("Opening new window due to third-party Chrome cross-origin security issue");
    //   window.open("https://geekgroup.app/users/henchmanpdx/collection?sort=rating.bgg&sortReverse=1");
    // }
    return (
      <div style={divStyle}>
        <iframe src="https://geekgroup.app/users/henchmanpdx/collection?sort=rating.bgg&sortReverse=1" title="gaming"></iframe>
      </div>
    )
  }
}

export default Gaming;