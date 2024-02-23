import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://i.postimg.cc/HrS6DGyv/1.png',
    thumbnail: 'https://i.postimg.cc/HrS6DGyv/1.png',
  },
  {
    original: 'https://i.postimg.cc/qtSQq8Q8/2.png',
    thumbnail: 'https://i.postimg.cc/qtSQq8Q8/2.png',
  },
  {
    original: 'https://i.postimg.cc/vcsq5tyh/3.png',
    thumbnail: 'https://i.postimg.cc/vcsq5tyh/3.png',
  },
];

const MyGallery = () => {
  return <ImageGallery items={images} />;
};

export default MyGallery;
