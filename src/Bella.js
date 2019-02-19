import ImageGallery from 'react-image-gallery';
import React, {Component} from "react";
import 'react-image-gallery/styles/css/image-gallery.css';

const PREFIX_URL = './images/bella/';
 
class Bella extends Component {

  render() {
 
    const images = [
      {
        original: require(`${PREFIX_URL}01.jpg`)
      },
      {
        original: require(`${PREFIX_URL}02.jpg`)
      },
      {
        original: require(`${PREFIX_URL}03.jpg`)
      }     
    ]
 
    return (
      <ImageGallery items={images} showThumbnails = {false}/>
    );
  }
 
}

export default Bella