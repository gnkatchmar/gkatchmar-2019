import React, {Component} from "react";
import './home.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  margin: theme.spacing.unit,
});

const buttonData = [
  {"hrefs":"https://www.linkedin.com/in/gregory-katchmar-3a48275a", "labels": "LinkedIn"},
  {"hrefs":"https://github.com/gnkatchmar", "labels": "Github"},
  {"hrefs":"https://drive.google.com/open?id=1FAe5QmZeuDlVWCz-1ClpXX0vWKHqPz63", "labels": "Resume (PDF)"},
];

const buttons = buttonData.map((buttonData, index) =>
<span key={index}>
  <Button 
    variant="contained"    
    href={buttonData.hrefs}
    target="_blank"
    color="primary"
    style={styles.button}
    children={buttonData.labels}
  />
  &nbsp;
  </span>
);

class Home extends Component {
  render() {
    return (
      <div className="bg">
      <div className="buttons">
        <h1>Gregory N. Katchmar</h1>
        <h2>JavaScript Developer</h2>
        <h4>More information at:</h4>
				{buttons}
        <br></br>
        <br></br>
				<Button 
					variant="contained" 
					color="primary"
					href="https://gnkatchmar.github.io/brunch-finder/"
					target="_blank"
					rel="noopener noreferrer"
					children="Weekend Brunch Finder App"
				/>
        <br></br>
        <br></br>
				<h4>Contact me at:</h4>
				<a href="mailto:gregkatchmar@gmail.com">gregkatchmar@gmail.com</a>
        <br></br>
        <br></br>
				<p>A React/Material-UI site</p>
				<p>Last updated: September 30, 2019</p>
      </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);