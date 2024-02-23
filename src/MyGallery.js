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
  {
    original: 'https://iili.io/JGuMG5X.png',
    thumbnail: 'https://iili.io/JGuMG5X.png',
  },
  {
    original: 'https://iili.io/JGuMMen.png',
    thumbnail: 'https://iili.io/JGuMMen.png',
  },
  {
    original: 'https://iili.io/JGuMEJt.png',
    thumbnail: 'https://iili.io/JGuMEJt.png',
  },
  {
    original: 'https://iili.io/JGuM0gI.png',
    thumbnail: 'https://iili.io/JGuM0gI.png',
  },
  {
    original: 'https://iili.io/JGuMVbs.png',
    thumbnail: 'https://iili.io/JGuMVbs.png',
  },
  {
    original: 'https://iili.io/JGuMXzG.png',
    thumbnail: 'https://iili.io/JGuMXzG.png',
  },
  
  {
    original: 'https://iili.io/JGuMO12.png',
    thumbnail: 'https://iili.io/JGuMO12.png',
  },
  {
    original: 'https://iili.io/JGuMNql.png',
    thumbnail: 'https://iili.io/JGuMNql.png',
  },
  {
    original: 'https://iili.io/JGuMegS.png',
    thumbnail: 'https://iili.io/JGuMegS.png',
  },
  {
    original: 'https://iili.io/JGuMvd7.png',
    thumbnail: 'https://iili.io/JGuMvd7.png',
  },
  {
    original: 'https://iili.io/JGuM879.png',
    thumbnail: 'https://iili.io/JGuM879.png',
  },
  {
    original: 'https://iili.io/JGuMSee.png',
    thumbnail: 'https://iili.io/JGuMSee.png',
  },
];

const MyGallery = () => {
  return <ImageGallery items={images} />;
};

export default MyGallery;
