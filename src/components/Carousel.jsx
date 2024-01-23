import React from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "../carousel.css";
import ImageProduct1 from "../assets/images/image-product-1.jpg";
import ImageProduct2 from "../assets/images/image-product-2.jpg";
import ImageProduct3 from "../assets/images/image-product-3.jpg";
import ImageProduct4 from "../assets/images/image-product-4.jpg";
import ImageProduct1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import ImageProduct2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import ImageProduct3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import ImageProduct4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg";

const images = [
  {
    original: ImageProduct1,
    thumbnail: ImageProduct1Thumbnail,
  },
  {
    original: ImageProduct2,
    thumbnail: ImageProduct2Thumbnail,
  },
  {
    original: ImageProduct3,
    thumbnail: ImageProduct3Thumbnail,
  },
  {
    original: ImageProduct4,
    thumbnail: ImageProduct4Thumbnail,
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default MyGallery;
