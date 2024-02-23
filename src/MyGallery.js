import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://i.postimg.cc/25YMWr8Y/1.png',
    thumbnail: 'https://i.postimg.cc/25YMWr8Y/1.png',
  },
  {
    original: 'https://i.postimg.cc/rmFHhjrY/2.png',
    thumbnail: 'https://i.postimg.cc/rmFHhjrY/2.png',
  },
  {
    original: 'https://i.postimg.cc/sDBkdT0k/3.png',
    thumbnail: 'https://i.postimg.cc/sDBkdT0k/3.png',
  },
];

const MyGallery = () => {
  return <ImageGallery items={images} />;
};

export default MyGallery;
