import ImageGallery from 'react-image-gallery';
import React, {Component} from "react";
import 'react-image-gallery/styles/css/image-gallery.css';

const PREFIX_URL = './images/bella/';

class Bella extends Component {

  render() {

    let images = [];
    for (let i = 1; i < 13; i++) {
      images.push({
        original: require(`${PREFIX_URL}${i}.jpg`),
        thumbnail: require(`${PREFIX_URL}${i}.jpg`)
      });
    }
 
    return (
      <ImageGallery items={images}/>
    );
  }
 
}

export default Bella