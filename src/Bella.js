import ImageGallery from 'react-image-gallery';
import React, {Component} from "react";
import 'react-image-gallery/styles/css/image-gallery.css';

const PREFIX = './images/bella/';
const SUFFIX = '.jpg';

let imageStart = 1;
let imageEnd = 13;
// let images = Array(imageEnd-imageStart+1)
//     .fill()
//     .map(() => {original: require(`${PREFIX}${imageStart++}${SUFFIX}`)},


 
class Bella extends Component {

  render() {
 
    const images = [
      {
        original: require(`${PREFIX}${imageStart++}${SUFFIX}`)
      }   
    ]
 
    return (
      <ImageGallery items={images} showThumbnails = {false}/>
    );
  }
 
}

export default Bella