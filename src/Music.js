import React, {Component} from "react";
import './music.css';
import Button from '@material-ui/core/Button';

class Music extends Component {
  render() {
    return (
      <div className="center">
      <div className="buttons">
        <Button 
					variant="contained" 
					color="primary"
					href="https://drive.google.com/file/d/1Bchwyz0jEkBX1BRMs4q52f_1CGaJVC3R/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					children="Music Collection (PDF)"
				/>
      </div>
      </div>
    )
  }
}

export default Music;
