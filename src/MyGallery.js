import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://iili.io/JGuRsQ1.png',
    thumbnail: 'https://iili.io/JGuRsQ1.png',
  },
  {
    original: 'https://iili.io/JGuRPTB.png',
    thumbnail: 'https://iili.io/JGuRPTB.png',
  },
  {
    original: 'https://iili.io/JGuRihP.png',
    thumbnail: 'https://iili.io/JGuRihP.png',
  },
];

const MyGallery = () => {
  return <ImageGallery items={images} />;
};

export default MyGallery;
