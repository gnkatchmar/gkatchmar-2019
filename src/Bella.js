import ImageGallery from 'react-image-gallery';
import React, {Component} from "react";
import 'react-image-gallery/styles/css/image-gallery.css';
import './bella.css';

const PREFIX_URL = './images/bella/';

class Bella extends Component {

  render() {

    let images = [];
    for (let i = 1; i < 24; i++) {
      images.push({
        original: require(`${PREFIX_URL}${i}.jpg`),
        thumbnail: require(`${PREFIX_URL}${i}.jpg`)
      });
    }
 
    return (
      <div>
        <ImageGallery items={images} />
      </div>
    );
  }
 
}

export default Bella