import React, {Component} from "react";
import Button from '@material-ui/core/Button';

class Music extends Component {
  render() {
    return (
      <div className="buttons">
        <br></br>
        <br></br>
        <br></br>
        <Button 
					variant="contained" 
					color="primary"
					href="https://drive.google.com/file/d/1fWi1cKnlMwCeonMlvy7I9xGjMQ98W7Qy/view?usp=drive_link"
					target="_blank"
					rel="noopener noreferrer"
					children="Music Collection (PDF)"
				/>
      </div>
     )
  }
}

export default Music;
